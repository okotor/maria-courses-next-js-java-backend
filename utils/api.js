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
let getIsAuthenticated = () => false;

export const setLogoutFunction = (fn) => {
  logoutFn = fn;
};

export const setIsAuthenticatedGetter = (getterFn) => {
  getIsAuthenticated = getterFn;
};

const processQueue = (error) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve();
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isAuthError = error.response?.status === 401;
    const isRefreshAttempt = originalRequest.url.includes("/auth/refresh");
    const isLoginOrRegister = originalRequest.url.includes("/login") || originalRequest.url.includes("/register");

    if (isAuthError && !originalRequest._retry && !isRefreshAttempt && !isLoginOrRegister) {
      if (isRefreshing) {
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
        await api.post("/auth/refresh");
        processQueue(null);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        if (logoutFn && !isLoggingOut && getIsAuthenticated()) {
          isLoggingOut = true;
          await logoutFn(); // Prevent double logout
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