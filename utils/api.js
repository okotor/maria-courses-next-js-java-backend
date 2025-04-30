import axios from 'axios';
import { getJwtToken, refreshAccessToken } from './tokenUtil';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // now uses env variable
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    let jwtToken = getJwtToken();
    if (!jwtToken) {
      return config; // No token available, proceed with the request
    }

    // Optional: Check if JWT is expired (could be a utility function)
    const isTokenExpired = false; // Add your expiration check here (optional)

    if (isTokenExpired) {
      // Try to refresh the token before making the request
      jwtToken = await refreshAccessToken();
      if (jwtToken) {
        config.headers['Authorization'] = `Bearer ${jwtToken}`;
      }
    } else {
      config.headers['Authorization'] = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

let alreadyRedirecting = false;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 && !alreadyRedirecting) {
      alreadyRedirecting = true;
      // Handle unauthorized access (possibly redirect to login)
      if (typeof window !== "undefined") {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;