import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://quizapi.io/api/v1',
});

export default api;
