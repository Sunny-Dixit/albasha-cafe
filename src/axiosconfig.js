// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5050/', // 🔁 Update to VPS when needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Optional: dynamically change Content-Type for file upload
instance.interceptors.request.use((config) => {
  // If the request body is FormData, set content type to multipart/form-data
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});

export default instance;
