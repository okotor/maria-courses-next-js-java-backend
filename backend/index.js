import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import env from "dotenv";
import express from "express";
import GoogleStrategy from "passport-google-oauth2";
import passport from "passport";
import pg from "pg";
import pgSession from 'connect-pg-simple';
import session from "express-session";
import { Strategy } from "passport-local";
import cors from 'cors';

//Express config
const app = express();

//CORS config (to connect to a foreign frontend)
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend origin
  credentials: true // Allow cookies to be sent
}));

// Parse JSON request bodies config
app.use(express.json()); 

//Body Parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//User Authentication Status config
app.use((req, res, next) => {
  res.locals.user = req.user || null; // Pass the user object or null if not authenticated
  res.locals.isAdmin = req.user?.isAdmin || false; // Add isAdmin for template use
  next();
});

//ENV config
env.config();

//DB config
const { Pool } = pg;
const db = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

//DB Session and Cookie Storage config
const pgSessionStore = pgSession(session);

app.use(session({
  store: new pgSessionStore({
    pool: db, // Reuse your PostgreSQL connection
    tableName: 'session',
    createTableIfMissing: true, // This ensures the table is created if it doesn't exist
    sameSite: 'None'
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 10, httpOnly: true, secure: false }
}));

//Passport config 
app.use(passport.initialize());
app.use(passport.session());

// POST and GET APIs
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10;
  try {
    const checkResult = await db.query(
      "SELECT * FROM users WHERE email = $1", [email]
    );

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists. Try logging in." });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ error: "Internal server error." });
      }

      try {
        const result = await db.query(
          'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
          [email, hash]
        ); 
        
        const user = result.rows[0];

        // Using req.login if you have session-based authentication
        req.login(user, (err) => {
          if (err) {
            console.error("Login error:", err);
            return res.status(500).json({ error: "Login failed, but registration successful." });
          }

          res.status(201).json({
            message: "You have been successfully registered!",
            user: { id: user.id, email: user.email } // Don't send password
          });
        });
      } catch (insertError) {
        console.error('Error inserting data:', insertError);
        return res.status(500).json({ error: "Database insertion error." });
      }
    });

  } catch (queryError) {
    console.error('Database query error:', queryError);
    return res.status(500).json({ error: "Internal server error." });
  }  
});

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ success: true, user });
    });
  })(req, res, next);
});


app.post("/api/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ error: "Logout failed." });
    }
    res.status(200).json({ message: "Logged out successfully." });
  });
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware
  }
  res.status(401).json({ error: "Unauthorized" }); // If not, return an error
}

app.get("/auth/status", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ 
      authenticated: true, 
      email: req.user.email,
      isAdmin: req.user.is_admin // ✅ Send admin status
    });
  } else {
    res.json({ authenticated: false });
  }
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
  scope: ["profile", "email"],
  })
);

// Google callback route - where Google redirects after authentication
app.get("/auth/google/loggedinpage", passport.authenticate("google", { failureRedirect: "/login?error=google" }), (req, res) => {
  req.logIn(req.user, (err) => {
    if (err) return res.redirect("http://localhost:3000?error=google");
    res.redirect("http://localhost:3000?success=true");
  });
});

function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.is_admin) {
    return next();
  }
  res.status(403).json({ error: "Access denied" }); // 403 Forbidden
}

//Protect a logged-In user only API route
app.get("/api/my-courses", isAuthenticated, (req, res) => {
  res.json({ message: "Welcome to My Courses!", user: req.user });
});

// Protect an admin-only API route
app.get("/api/admin-dashboard", isAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});


// // PUT method here (replace user data) - CHANGE PASSWORD
//   // 1. logic
//   // 2. alert box asking the user to rewrite data?

// // DELETE method here - DELETE ACCOUNT
// // 1. logic
// // 2. alert box asking "Are you sure?"

passport.use(
  "local",
  new Strategy({ usernameField: "email" }, async (email, password, cb) => {
    try {
      const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);

      if (checkUser.rows.length === 0) {
        return cb(null, false, { message: "User not found" });
      }

      const user = checkUser.rows[0];
      const storedHashedPassword = user.password;

      const valid = await bcrypt.compare(password, storedHashedPassword);
      if (valid) {
        return cb(null, user);  // 👈 User now includes is_admin
      } else {
        return cb(null, false, { message: "Invalid credentials" });
      }
    } catch (err) {
      return cb(err);
    }
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/loggedinpage",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    }, 
    async (accessToken, refreshToken, profile, cb) => {
      try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);
        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [profile.email, "google"]
          );
          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, { id: user.id, is_admin: user.is_admin }); // Store both ID & is_admin
});

passport.deserializeUser(async (obj, cb) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [obj.id]);
    if (result.rows.length > 0) {
      cb(null, result.rows[0]); // Fetch full user details
    } else {
      cb(null, false);
    }
  } catch (err) {
    cb(err);
  }
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.get("/news", async (req, res) => {
//   await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
//   try {
//     const result = await db.query('SELECT * FROM courses');
    
//     // Format the date in the result to YYYY-MM-DD format
//     const courses = result.rows.map(course => {
//       // Ensure the 'date' is a string in the correct format
//       if (course.date instanceof Date) {
//         course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
//       }
//       return course;
//     });

//     return res.json(courses); // Return the formatted courses
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     throw error;
//   }
// });