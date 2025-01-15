import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xlcompbackend-production.up.railway.app',
});

export default api;