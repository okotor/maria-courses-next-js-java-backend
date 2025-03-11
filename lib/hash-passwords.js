import pool from '@/lib/db';
import bcrypt from 'bcrypt';

export async function hashUserPassword(originalPassword) {
  const saltRounds = 10;
  return new Promise((resolve, reject) => {
      bcrypt.hash(originalPassword, saltRounds, (err, hashedPassword) => {
          if (err) {
              console.error("Error hashing password:", err);
              reject(err);
          } else {
              resolve(hashedPassword);
          }
      });
  });
}

export async function verifyPassword(reportedPassword, reportedUsername) {
  try {
    // Query the database for the user
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [reportedUsername]);

    if (result.rows.length === 0) {
      throw new Error("User not found.");
    }

    const user = result.rows[0];
    const storedHashedPassword = user.password;

    // Compare the provided password with the stored hashed password
    const isValid = await bcrypt.compare(reportedPassword, storedHashedPassword);

    return isValid ? user : false;

  } catch (err) {
    console.error("Error verifying password:", err);
    throw err;
  }
}
