import axios from 'axios';

const BASE_URL = import.meta.env.VITE_WORKER_URL;

export const fetchQuiz = async (limit, category, difficulty, type) => {
    const queryParams = {
        category: category,
        limit: limit,
        quizType: type,
    };

    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: queryParams,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
