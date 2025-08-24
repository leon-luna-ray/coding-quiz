import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchQuiz } from '@/lib/api';

const GameContext = createContext();

const formatQuizName = (slug) => {
    const specialCases = {
        'cpp': 'C++',
        'csharp': 'C#',
        'javascript': 'JavaScript',
        'typescript': 'TypeScript'
    };

    return specialCases[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

export const GameProvider = ({ children }) => {
    const location = useLocation();

    // State
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState([]);

    // Memo
    const quizType = useMemo(() => {
        const pathSegments = location.pathname.split('/');
        const slug = pathSegments[2] || 'unknown'; // /quiz/:slug
        return {
            name: formatQuizName(slug),
            slug
        };
    }, [location.pathname]);

    const currentQuestion = questions ? questions[questionIndex] : null;

    const currentQuestionChoices = currentQuestion
        ? Object.entries(currentQuestion.answers)
        : null;

    const userResponse = userResponses[questionIndex];
    const isCorrectResponse = userResponse ? userResponse.isCorrect : null;
    const isResponded = userResponse !== undefined;

    // Methods
    const getCorrectAnswerKey = (answers) => Object.keys(answers).find(key => answers[key] === "true");
    const correctAnswerKey = currentQuestion ? getCorrectAnswerKey(currentQuestion.correct_answers) : null;

    const handleAnswerSubmit = (userChoice) => {
        if (!currentQuestion) return;
        const correctKey = getCorrectAnswerKey(currentQuestion.correct_answers);
        const correctAnswer = currentQuestion.answers[correctKey];
        const isCorrect = correctKey === userChoice;
        const response = {
            question: currentQuestion,
            userChoice: currentQuestion.answers[userChoice],
            correctAnswer,
            isCorrect,
        };
        setUserResponses((prev) => [...prev, response]);
        if (isCorrect) setScore((prev) => prev + 1);
    };
    const handleNextQuestion = () => setQuestionIndex((prev) => prev + 1);

    const resetGame = () => {
        setScore(0);
        setQuestionIndex(0);
        setUserResponses([]);
    };

    // Lifecycle
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                resetGame();
                const data = await fetchQuiz(10, 'code', 'easy', quizType.name);
                setQuestions(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [quizType.name]);

    const value = {
        score,
        loading,
        quizType,
        currentQuestion,
        currentQuestionChoices,
        isCorrectResponse,
        isResponded,
        correctAnswerKey,
        handleAnswerSubmit,
        handleNextQuestion,
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