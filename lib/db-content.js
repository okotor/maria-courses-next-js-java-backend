// import { S3 } from '@aws-sdk/client-s3';
import fs from 'node:fs/promises';
import pool from '@/lib/db';
import slugify from 'slugify';
import xss from 'xss';

// const s3 = new S3({
//     region: 'us-east-1',
//     credentials: {
//     accessKeyId: process.env.local.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.local.AWS_SECRET_ACCESS_KEY,
//   },
//   });

export async function getCourses() {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

  try {
    const result = await pool.query('SELECT * FROM courses');
    
    // Format the date in the result to YYYY-MM-DD format
    const courses = result.rows.map(course => {
      // Ensure the 'date' is a string in the correct format
      if (course.date instanceof Date) {
        course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
      }
      return course;
    });

    return courses; // Return the formatted courses
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
}


export async function getCourse(slug) {
  try {
    const result = await pool.query('SELECT * FROM courses WHERE slug = $1', [slug]);
    return result.rows[0] || null; // Return the first course or null if not found
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
}

export async function saveCourse(course) {
  try {
    // Generate a slug
    const twoSlugWords = course.title.split(" ").slice(0, 2).join(" ");
    const randomSlugAddition = Math.floor(Math.random() * 100) + 1;
    const modifiedTitle = `${twoSlugWords} ${randomSlugAddition}`;
    course.slug = slugify(modifiedTitle, { lower: true, strict: true });

    // Sanitize course description
    course.course_description = xss(course.course_description);

    // Handle image processing
    const extension = course.image.name.split('.').pop();
    const fileName = `${course.slug}.${extension}`;
    const filePath = `public/${fileName}`;

    // Save image to public directory
    const bufferedImage = await course.image.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(bufferedImage)); // No callback needed

    // Set image name for DB storage
    course.image = fileName;

    // Insert course into PostgreSQL
    const result = await pool.query(
      `INSERT INTO courses 
        (date, slug, title, image, summary, course_description, lecturer, lecturer_email) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING id`,
      [
        course.date,
        course.slug,
        course.title,
        course.image,
        course.summary,
        course.course_description,
        course.lecturer,
        course.lecturer_email
      ]
    );

    return result.rows[0].id; // Return the inserted course ID
  } catch (error) {
    console.error("❌ Upload failed:", error);
    throw error;
  }
}


// SORTING COURSES

export async function getLatestCourses() {
  try {
    const result = await pool.query(`
      SELECT * FROM courses 
      ORDER BY date DESC 
      LIMIT 3
    `);

    // Format the 'date' field
    const courses = result.rows.map(course => {
      if (course.date instanceof Date) {
        course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
      }
      return course;
    });

    return courses;
  } catch (error) {
    console.error('Error fetching latest courses:', error);
    throw error;
  }
}


export async function getAvailableCourseYears() {
  try {
    const result = await pool.query(`
      SELECT DISTINCT EXTRACT(YEAR FROM date) AS year 
      FROM courses 
      ORDER BY year DESC
    `);
    return result.rows.map(row => row.year);
  } catch (error) {
    console.error('Error fetching available course years:', error);
    throw error;
  }
}


export async function getCoursesForYear(year) {
  try {
    const result = await pool.query(`
      SELECT * FROM courses 
      WHERE EXTRACT(YEAR FROM date) = $1 
      ORDER BY date ASC
    `, [year]);

    // Format the 'date' field
    const courses = result.rows.map(course => {
      if (course.date instanceof Date) {
        course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
      }
      return course;
    });

    return courses;
  } catch (error) {
    console.error('Error fetching courses for year:', error);
    throw error;
  }
}

