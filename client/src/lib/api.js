import axios from 'axios';

// const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
// const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const BASE_URL = import.meta.env.VITE_WORKER_URL;

export const fetchQuiz = async (limit, category, difficulty, type) => {
    const endpoint = '/questions';
    const queryParams = {
        category: category,
        limit: limit,
        quizType: type,
    };

    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: queryParams,
        });
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
