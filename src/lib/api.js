import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const fetchQuiz = async (limit, category, difficulty, tags) => {
    const query = `${BASE_URL}/questions?&category=${category}&difficulty=${difficulty}&limit=20&tags=${tags}`;
    try {
        const response = await axios.get(query, {
            headers: { 'X-Api-Key': API_TOKEN, },
            params: { limit: limit, },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};