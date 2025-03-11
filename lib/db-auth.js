import pool from '@/lib/db';

export async function getUsers() {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows; // Return the fetched users
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}