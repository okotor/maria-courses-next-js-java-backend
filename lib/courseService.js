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
    .filter(course => !!course.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // sort by raw date
};

// ----- Public APIs -----
export const getCourses = async () => {
  const result = await fetchJson(`${BACKEND_URL}/courses`);
  return mapAndSortCourses(result);
};

export const getCourse = async (slug) => {
  return await fetchJson(`${BACKEND_URL}/courses/${slug}`);
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
      headers: { "Content-Type": "multipart/form-data" },
      validateStatus: status => status >= 200 && status < 300 // Accept 201
    });
    console.log("Kurz úspěšně uložen:", response.data);
    return response.data;
  } catch (error) {
    console.error("Při ukládání kurzu došlo k chybě", error);
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: error.message || 'Unknown backend error',
    };
  }
};

export const updateCourse = async (formData, slug) => {
  try {
    const response = await api.post(`/courses/update/${slug}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      validateStatus: status => status >= 200 && status < 300,
    });
    return response.data;
  } catch (error) {
    console.error('Při aktualizaci kurzu došlo k chybě', error);
    // --- return backend error body if present ---
    if (error.response && error.response.data) {
      return error.response.data;  // Always return {success: false, message: ...}
    }
    // Fallback for no error response from backend
    return {
      success: false,
      message: error.message || 'Unknown backend error',
    };
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



