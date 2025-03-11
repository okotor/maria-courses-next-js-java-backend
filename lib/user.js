import pool from '@/lib/db';

export async function createUser(email, password) {
  try {
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, password]
    );
    return result.rows[0].id;
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
}
