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
const mapAndSortCourses = (courses) => {
  return courses
    .filter(course => !!course.date)                        // keep courses with date
    .sort((a, b) => new Date(b.date) - new Date(a.date))    // sort descending by raw date
    .map(course => ({
      ...course,
      dateFormatted: formatDate(course.date),               // add formatted date as separate field
    }));
};

// ----- Public APIs -----
export const getCourses = async () => {
  const result = await fetchJson(`${BACKEND_URL}/courses`);
  return mapAndSortCourses(result);
};

export const getCourse = async (slug) => {
  const course = await fetchJson(`${BACKEND_URL}/courses/${slug}`);
  return {
    ...course,
    date: formatDate(course.date),
  };
};

export const getLatestCourses = async () => {
  const result = await fetchJson(`${BACKEND_URL}/courses/latest`);
  return mapAndSortCourses(result);
};

export const getAvailableCourseYears = async () => {
  return await fetchJson(`${BACKEND_URL}/courses/years`);
};

export const getCoursesForYear = async (year) => {
  const result = await fetchJson(`${BACKEND_URL}/courses/year/${year}`);
  return mapAndSortCourses(result);
};

// ----- Protected API -----
export const saveCourse = async (formData) => {
  try {
    const response = await api.post("/courses/save", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Kurz úspěšně uložen:", response.data);
    return response.data;
  } catch (error) {
    console.error("Při ukládání kurzu došlo k chybě", error);
    throw error;
  }
};

export const updateCourse = async (formData, slug) => {
  try {
    const response = await api.post(`/courses/update/${slug}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Při aktualizaci kurzu došlo k chybě', error);
    throw error;
  }
};

export const deleteCourse = async (slug) => {
  try {
    const response = await api.delete(`/courses/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Při mazání kurzu došlo k chybě: ', error);
    throw error;
  }
};



