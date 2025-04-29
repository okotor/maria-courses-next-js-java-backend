import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marian-courses-backend-java.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let subscribers = [];



const onTokenRefreshed = (token) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response: { status } } = error;
    const originalRequest = config;

    if (status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addSubscriber((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(axios(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await axios.post(
          'https://marian-courses-backend-java.onrender.com/api/refresh-token',
          { refreshToken },
          { withCredentials: true } // Include cookies in the request
        );
        localStorage.setItem('token', data.token);
        api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
        isRefreshing = false;
        onTokenRefreshed(data.token);
        originalRequest.headers['Authorization'] = `Bearer ${data.token}`;
        return axios(originalRequest);
      } catch (err) {
        isRefreshing = false;
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login'; // Redirect to login
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;