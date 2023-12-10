import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { fetchQuiz } from '@/lib/api';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    // State
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
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
        console.log(userChoice)
        console.log(currentQuestion.correct_answer === userChoice)
        if (userChoice === currentQuestion.correct_answer) {
            setScore(score + 1);
            console.log('correct')
        }
        else {
            console.log('incorrect!!')
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
        setSelectedQuiz,
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