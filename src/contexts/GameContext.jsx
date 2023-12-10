import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchQuiz } from '@/lib/api';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const location = useLocation();

    // State
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);

    // Memo
    const quizType = useMemo(() => {
        switch (location.pathname) {
            case '/quiz/html':
                return 'HTML';
            case '/quiz/javascript':
                return 'JavaScript';
            case '/quiz/python':
                return 'Python';
            default:
                return 'DefaultType';
        }
    }, [location.pathname]);

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
    const isCorrect = (userChoice, answers) => {
        const correctAnswer = answers[`${userChoice}_correct`];
        return correctAnswer === "true";
    };

    const handleAnswer = (userChoice) => {
        if (isCorrect(userChoice, currentQuestion.correct_answers)) {
            setScore(score + 1);
        }
        setQuestionIndex(questionIndex + 1);
    };

    // Lifecycle
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetchQuiz(20, 'code', 'Easy', quizType);
                setQuestions(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        console.log(location.pathname)
        fetchData();
    }, []);

    const value = {
        loading,
        score,
        currentQuestion,
        currentQuestionChoices,
        quizType,
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