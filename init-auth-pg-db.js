import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_DATABASE_URL,
});

const client = await pool.connect();

try {
  // Create users table
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT
    );
  `);

  // Create sessions table
  await client.query(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      expires_at BIGINT NOT NULL,
      user_id INTEGER NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // Create course_subscriptions table
  await client.query(`
    CREATE TABLE IF NOT EXISTS course_subscriptions (
      id SERIAL PRIMARY KEY,
      title TEXT,
      image TEXT,
      description TEXT
    );
  `);

  // Check if any subscriptions exist
  const { rows } = await client.query('SELECT COUNT(*) as count FROM course_subscriptions');
  const hasSubscriptions = rows[0].count > 0;

  if (!hasSubscriptions) {
    await client.query(`
      INSERT INTO course_subscriptions (title, image, description)
      VALUES
      ('Zoltán', '/zoltan-zdravozivotnestylovy.png', 'Představujeme nejnovější a nejefektivnější metodu zdravého stravování.'),
      ('Veronika', '/veronika-vytvarna.png', 'Když máš talent, dej o sobě vědět!'),
      ('Barbora', '/barbora-botanickozkoumava.png', 'Zjednodušte si údržbu zeleně v domácnosti a na zahradě automatizovaným nástrojem Smart-Greenery.'),
      ('Bedřich', '/bedrich-businessosportovni.png', 'Získej rovnouváhu ducha, duše i těla.'),
      ('Sára', '/jo-73.png', 'Dáme to.'),
      ('Uršula', '/ursula-umeleckovedecka.png', 'Jak vyvolat a upevnit zájem designer firem k zadávání uměleckých zakázek u vás na univerzitě.'),
      ('Valerie', '/valerie-vynalezava.png', 'Buďte mezi tisícemi žen, které využívají revoluční metody líčení s Make-U-Up.');
    `);
  }
  
  console.log("Tables created and data inserted successfully");
} catch (err) {
  console.error("Error creating tables or inserting data:", err);
} finally {
  client.release();
  pool.end();
}
