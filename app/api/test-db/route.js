import pool, { connectDB } from '@/lib/db'; // Import correctly

export async function GET() {
  try {
    await connectDB(); // Ensures DB connection is established

    const result = await pool.query('SELECT NOW()'); // Test query
    return Response.json({
      success: true,
      message: 'Database connected successfully!',
      server_time: result.rows[0].now,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return Response.json(
      { success: false, error: 'Database connection failed', details: error.message },
      { status: 500 }
    );
  }
}
