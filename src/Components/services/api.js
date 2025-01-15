import axios from 'axios';

const api = axios.create({
  baseURL: 'http://xlcompbackend-production.up.railway.app',
});

export default api;