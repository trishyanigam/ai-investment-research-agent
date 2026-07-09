import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 30000, // 30 seconds timeout for AI generation response
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
