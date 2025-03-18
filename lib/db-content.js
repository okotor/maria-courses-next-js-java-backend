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
    const response = await fetch('http://localhost:8080/courses');
    if (!response.ok) {
        throw new Error('Failed to fetch courses');
    }
    const result = await response.json();
    
    // Extract courses from the embedded object
    const courses = result._embedded && result._embedded.courses ? result._embedded.courses : [];
    
    // Format the date in the result to YYYY-MM-DD format
    const formattedCourses = courses.map(course => {
        // Ensure the 'date' is a string in the correct format
        if (course.date instanceof Date) {
            course.date = course.date.toISOString().split('T')[0]; // Convert to 'YYYY-MM-DD' string
        }
        return course;
    });

    return formattedCourses; // Return the formatted courses
  } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
  }
}

export async function getCourse(slug) {
  try {
      const response = await fetch(`http://localhost:8080/courses/${slug}`);
      if (!response.ok) {
          console.error(`Error: ${response.status} ${response.statusText}`);
          throw new Error('Failed to fetch course');
      }
      const course = await response.json();
      console.log('Fetched course:', course);
      return course || null; // Return the course or null if not found
  } catch (error) {
      console.error('Error fetching course:', error);
      throw error;
  }
}

export async function saveCourse(course) {
  try {
    const formData = new FormData();
    formData.append("date", course.date);
    formData.append("title", course.title);
    formData.append("summary", course.summary);
    formData.append("courseDescription", course.course_description);
    formData.append("lecturer", course.lecturer);
    formData.append("lecturerEmail", course.lecturer_email);
    // formData.append("image", course.image); // File object
    formData.append("image", course.image, course.image.name);
    console.log("Sending FormData:", [...formData.entries()]);

    const response = await fetch("http://localhost:8080/courses/save", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json(); // Return the saved course data
  } catch (error) {
    console.error("❌ Upload failed:", error);
    throw error;
  }
}

// export async function saveCourse(course) {
//   try {
//     // Generate a slug
//     const twoSlugWords = course.title.split(" ").slice(0, 2).join(" ");
//     const randomSlugAddition = Math.floor(Math.random() * 100) + 1;
//     const modifiedTitle = `${twoSlugWords} ${randomSlugAddition}`;
//     course.slug = slugify(modifiedTitle, { lower: true, strict: true });

//     // Sanitize course description
//     course.course_description = xss(course.course_description);

//     // Handle image processing
//     const extension = course.image.name.split('.').pop();
//     const fileName = `${course.slug}.${extension}`;
//     const filePath = `public/${fileName}`;

//     // Save image to public directory
//     const bufferedImage = await course.image.arrayBuffer();
//     await fs.writeFile(filePath, Buffer.from(bufferedImage)); // No callback needed

//     // Set image name for DB storage
//     course.image = fileName;

//     // Insert course into PostgreSQL
//     const result = await pool.query(
//       `INSERT INTO courses 
//         (date, slug, title, image, summary, course_description, lecturer, lecturer_email) 
//        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
//        RETURNING id`,
//       [
//         course.date,
//         course.slug,
//         course.title,
//         course.image,
//         course.summary,
//         course.course_description,
//         course.lecturer,
//         course.lecturer_email
//       ]
//     );

//     return result.rows[0].id; // Return the inserted course ID
//   } catch (error) {
//     console.error("❌ Upload failed:", error);
//     throw error;
//   }
// }


// SORTING COURSES

export async function getLatestCourses() {
  try {
    const response = await fetch("http://localhost:8080/courses/latest"); // Adjust the URL if needed
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const courses = await response.json();

    // Format the 'date' field before returning
    return courses.map(course => ({
      ...course,
      date: new Date(course.date).toISOString().split("T")[0], // Convert to 'YYYY-MM-DD'
    }));

  } catch (error) {
    console.error("Error fetching latest courses:", error);
    throw error;
  }
}


export async function getAvailableCourseYears() {
  try {
    const response = await fetch("http://localhost:8080/courses/years"); // Adjust the URL if deployed
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Parses JSON response into a JavaScript array
  } catch (error) {
    console.error("Error fetching available course years:", error);
    throw error;
  }
}


export async function getCoursesForYear(year) {
  try {
    const response = await fetch(`http://localhost:8080/courses/year/${year}`); // Adjust URL if needed
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const courses = await response.json();

    // Format the 'date' field before returning
    return courses.map(course => ({
      ...course,
      date: new Date(course.date).toISOString().split("T")[0], // Convert to 'YYYY-MM-DD'
    }));

  } catch (error) {
    console.error("Error fetching courses for year:", error);
    throw error;
  }
}

