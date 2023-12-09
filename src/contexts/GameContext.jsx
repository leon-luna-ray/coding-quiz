import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { fetchQuiz } from '@/lib/api';
import axios from 'axios';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
    const BASE_URL = import.meta.env.VITE_BASE_API_URL;

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

    // Methods
    const handleAnswer = (userChoice) => {
        if (userChoice === currentQuestion.answer) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    // Lifecycle
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchQuiz(20, 'code', 'Easy', 'JavaScript');
                setQuestions(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

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