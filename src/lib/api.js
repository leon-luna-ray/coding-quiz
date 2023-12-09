import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const fetchQuiz = async (limit, difficulty, tags) => {
    const query = `${BASE_URL}/questions?apiKey=${API_TOKEN}Y&category=${'code'}&difficulty=${difficulty}&limit=${limit}tags=${tags}`

    try {
        const response = await axios.get(query, {
            headers: {
                'X-Api-Key': API_TOKEN,
            },
            params: {
                limit: limit,
            },
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
    }

}