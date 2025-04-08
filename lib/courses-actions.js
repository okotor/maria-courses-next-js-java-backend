// import { S3 } from '@aws-sdk/client-s3';

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
    const response = await fetch('https://marian-courses-backend-java-production.up.railway.app/courses');
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
      const response = await fetch(`https://marian-courses-backend-java-production.up.railway.app/courses/${slug}`);
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

export async function saveCourse(formData) {
  const response = await fetch("https://marian-courses-backend-java-production.up.railway.app/courses/save", {
    method: "POST",
    body: formData,
    headers: {
      'Authorization': `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)jwtToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`, // Extract the token from the cookie
    },
    credentials: 'include', // Include credentials in the request
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json(); // Return the saved course data
}

// SORTING COURSES

export async function getLatestCourses() {
  try {
    const response = await fetch("https://marian-courses-backend-java-production.up.railway.app/courses/latest"); // Adjust the URL if needed
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
    const response = await fetch("https://marian-courses-backend-java-production.up.railway.app/courses/years"); // Adjust the URL if deployed
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
    const response = await fetch(`https://marian-courses-backend-java-production.up.railway.app/courses/year/${year}`); // Adjust URL if needed
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

