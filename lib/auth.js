import NextAuth from 'next-auth';
import { compare } from 'bcryptjs'; // Used to compare password hashes
import pool from '@/lib/db'; // PostgreSQL connection pool

export const authOptions = {
  providers: [
    {
      provider: 'email',
      id: 'email',
      async authorize(credentials) {
        // Check if user exists in the database by email
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [credentials.email]);

        if (result.rows.length > 0) {
          const user = result.rows[0];

          // Compare the provided password with the stored hashed password
          const passwordMatch = await compare(credentials.password, user.password);
          
          if (passwordMatch) {
            // If the password matches, return the user
            return user;
          }
        }
        return null; // If no user or password doesn't match, return null
      },
    },
    // You can add other authentication providers here like Google, GitHub, etc.
  ],
  session: {
    strategy: 'database', // Store session in the database for persistent login
  },
  callbacks: {
    async session({ session, token }) {
      // Add the user ID to the session object for client-side access
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      // Attach user ID to the JWT token upon login
      if (user) {
        token.id = user.id; // Save the user ID into the token
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Security secret for signing the session and JWT tokens
};

const handler = NextAuth(authOptions); // Initialize NextAuth with the provided options
export { handler as GET, handler as POST }; // Export handler for both GET and POST methods
