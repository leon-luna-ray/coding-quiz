import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchQuiz } from '@/lib/api';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const location = useLocation();

    // State
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
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
            case '/quiz/csharp':
                return 'C#';
            case '/quiz/cpp':
                return 'C++';
            case '/quiz/css':
                return 'CSS';
            case '/quiz/elixir':
                return 'Elixir';
            case '/quiz/fortran':
                return 'Fortran';
            case '/quiz/go':
                return 'Go';
            case '/quiz/java':
                return 'Java';
            case '/quiz/php':
                return 'PHP';
            case '/quiz/rust':
                return 'Rust';
            case '/quiz/sql':
                return 'SQL';
            case '/quiz/swift':
                return 'Swift';
            case '/quiz/typescript':
                return 'TypeScript';
            default:
                return null;
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
                const data = await fetchQuiz(10, 'code', 'easy', quizType);
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
        score,
        loading,
        quizType,
        currentQuestion,
        currentQuestionChoices,
        setScore,
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