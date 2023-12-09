// GameContext.js
import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
    const BASE_URL = import.meta.env.VITE_BASE_API_URL;
    const userScore = parseInt(localStorage.getItem('coding-quiz-score'));

    // State
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    // Memo
    const currentQuestion = useMemo(
        () => {
            if (questions) {
                return questions[questionIndex];
            }
            return null;
        },
        [questions, questionIndex]
    );
    const currentQuestionChoices = useMemo(
        () => {
            if (currentQuestion) {
                return Object.keys(currentQuestion.answers).map((key) => [key, currentQuestion.answers[key]]);
            }
            return null;
        },
        [currentQuestion]
    );

    // Lifecycle
    useEffect(() => {
        if (userScore) {
            setScore(userScore);
        }

        const fetchQuiz = async (limit, category, difficulty, tags) => {
            const query = `${BASE_URL}/questions?&category=${category}&difficulty=${difficulty}&limit=20&tags=${tags}`;

            try {
                const response = await axios.get(query, {
                    headers: {
                        'X-Api-Key': API_TOKEN,
                    },
                    params: {
                        limit: limit,
                    },
                });
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchQuiz(20, 'code', 'Easy', 'JavaScript');
    }, []);

    useEffect(() => {
        localStorage.setItem('coding-quiz-score', score);
    }, [score]);

    const handleAnswer = (userChoice) => {
        if (userChoice === currentQuestion.answer) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    const value = {
        loading,
        score,
        currentQuestion,
        currentQuestionChoices,
        handleAnswer,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }
    return context;
};