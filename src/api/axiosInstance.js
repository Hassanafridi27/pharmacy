import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://devmoar-api.shifa.com.pk/", // change to your backend
});

// Add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
