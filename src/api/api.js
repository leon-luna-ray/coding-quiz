import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://quizapi.io/api/',
});

export default api;
