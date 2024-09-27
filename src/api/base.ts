import axios from 'axios';

const api = axios.create({
  baseURL: 'https://learn.codeit.kr', // API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
