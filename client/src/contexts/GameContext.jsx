import React, { createContext, useContext, useEffect, useState, useMemo, use } from 'react';
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
    const [userAnswers, setUserAnswers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);

    // Memo
    const quizType = useMemo(() => {
        const pathSegments = location.pathname.split('/');
        const slug = pathSegments[2] || 'unknown'; // /quiz/:slug

        return {
            name: formatQuizName(slug),
            slug: slug
        };
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
    const isInputCorrect = (userChoice, answers) => {
        const correctAnswer = answers[`${userChoice}_correct`];
        return correctAnswer === "true";
    };
    const handleNextQuestion = () => {
        setIsCorrect(null);
        setQuestionIndex(questionIndex + 1);
    };
    const handleAnswerSubmit = (userChoice) => {
        const isCorrect = isInputCorrect(userChoice, currentQuestion.answers);

        const userInput = {
            id: currentQuestion.id,
            question: currentQuestion.question,
            userAnswer: userChoice,
            isCorrect: isCorrect
        }

        setUserAnswers((prev) => [...prev, userInput]);

        if (isCorrect) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        // handleNextQuestion();
    };


    const resetGame = () => {
        setScore(0);
        setQuestionIndex(0);
        setQuestions(null);
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
        setScore,
        handleAnswerSubmit,
        isCorrect,
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