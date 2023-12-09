import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from '@/views/LoadingScreen';
import AnswerPanel from '@/components/AnswerPanel';
import QuestionPanel from '@/components/QuestionPanel';
import ScorePanel from '@/components/ScorePanel';
import GameOver from '@/components/GameOver';
import testQuestions from '@/lib/questions';

const Game = () => {
  const API_TOKEN = import.meta.env.VITE_QUIZ_API_TOKEN;
  const BASE_URL = import.meta.env.VITE_BASE_API_URL;
  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));

  // State
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    if (userScore) {
      setScore(userScore);
    }
    const fetchQuiz = async (limit, category, difficulty, tags) => {
      // const query = `${BASE_URL}/questions?apiKey=${API_TOKEN}Y&category=${'code'}&difficulty=${difficulty}&limit=${limit}tags=${tags}`
      const query = `https://quizapi.io/api/v1/questions?apiKey=${API_TOKEN}&category=${category}&difficulty=${difficulty}&limit=20&tags=${tags}
`
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

    }
    fetchQuiz(20, 'code', 'Easy', 'JavaScript');
  }, []);

  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (questionIndex === testQuestions.length - 1) {
    return <GameOver score={score} />;
  }
  // Game
  const question = questions[questionIndex].question;
  const answers = questions[questionIndex].answers;
  const choices = Object.keys(answers).map((key) => [key, answers[key]]);
  const answer = testQuestions[questionIndex].answer;

  const handleAnswer = (userChoice) => {
    if (userChoice === answer) {
      setScore(score + 1);
      setQuestionIndex(questionIndex + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <main className='game container'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' score={score} />
        <QuestionPanel className='question-panel' question={question} />
        <AnswerPanel
          className='answer-panel'
          choices={choices}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      </div>
    </main>
  );
};

export default Game;
