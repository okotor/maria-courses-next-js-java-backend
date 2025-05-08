import api from "@/utils/api";
import { BACKEND_URL } from "@/utils/constants";
// import { S3 } from '@aws-sdk/client-s3';

// const s3 = new S3({
//     region: 'us-east-1',
// //     credentials: {
// //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //   },
//   });

// ----- Utilities -----
const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
};

// ----- Map Course Dates -----
const mapCourseDates = (courses) => {
  return courses
    .filter(course => !!course.date) // Remove courses without a date
    .map(course => ({
      ...course,
      date: formatDate(course.date), // Format the date here
    }))
    .filter(course => !!course.date); // Filter out any courses with invalid dates
};

// ----- Public APIs -----
export const getCourses = async () => {
  const result = await fetchJson(`${BACKEND_URL}/courses`);
  return mapCourseDates(result); // result is already an array of courses
};

export const getCourse = async (slug) => {
  const course = await fetchJson(`${BACKEND_URL}/courses/${slug}`);
  return { ...course, date: formatDate(course.date) };
};

export const getLatestCourses = async () => {
  const courses = await fetchJson(`${BACKEND_URL}/courses/latest`);
  return mapCourseDates(courses);
};

export const getAvailableCourseYears = async () =>
  await fetchJson(`${BACKEND_URL}/courses/years`);

export const getCoursesForYear = async (year) => {
  const courses = await fetchJson(`${BACKEND_URL}/courses/year/${year}`);
  return mapCourseDates(courses);
};

// ----- Protected API -----
export const saveCourse = async (formData) => {
  try {
    const response = await api.post("/courses/save", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Course saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving course:", error);
    throw error;
  }
};

