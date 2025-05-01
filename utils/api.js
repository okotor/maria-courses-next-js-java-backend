import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // now uses env variable
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue = [];
let logoutFn = null;
let isLoggingOut = false;

export const setLogoutFunction = (fn) => {
  logoutFn = fn;
};

const processQueue = (error) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Skip if already tried refresh or hitting refresh endpoint
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      if (isRefreshing) {
        // Wait in queue if a refresh is already in progress
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post('/auth/refresh'); // refresh cookies/token silently
        processQueue(null);
        return api(originalRequest); // retry failed request
      } catch (refreshError) {
        processQueue(refreshError);
        if (logoutFn && !isLoggingOut) {
          isLoggingOut = true;
          await logoutFn(); // call passed-in logout only once
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;

// let alreadyRedirecting = false;

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401 && !alreadyRedirecting) {
//       alreadyRedirecting = true;
//       // Handle unauthorized access (possibly redirect to login)
//       if (typeof window !== "undefined") {
//         window.location.href = '/login';
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;