import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const fetchQuiz = async (limit, category, difficulty, tags) => {
    const endpoint = '/questions';
    const queryParams = {
        category: category,
        // difficulty: difficulty,
        limit: limit,
        tags: tags,
    };

    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                'X-Api-Key': API_TOKEN,
            },
            params: queryParams,
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
