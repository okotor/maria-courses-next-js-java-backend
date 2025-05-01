import api from "@/utils/api";
// import { S3 } from '@aws-sdk/client-s3';

// const s3 = new S3({
//     region: 'us-east-1',
// //     credentials: {
// //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //   },
//   });

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// ----- Utilities -----
const formatDate = (date) =>
  date ? new Date(date).toISOString().split("T")[0] : null;

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

const mapCourseDates = (courses) =>
  courses.map((course) => ({
    ...course,
    date: formatDate(course.date),
  }));

// ----- Public APIs -----
export const getCourses = async () => {
  const result = await fetchJson(`${BACKEND_URL}/courses`);
  return mapCourseDates(result._embedded?.courses || []);
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
    const response = await api.post("/courses/save", formData);
    console.log("Course saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving course:", error);
    throw error;
  }
};

