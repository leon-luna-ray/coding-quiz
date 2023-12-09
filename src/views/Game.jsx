import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from '@/views/LoadingScreen';
import AnswerPanel from '@/components/AnswerPanel';
import QuestionPanel from '@/components/QuestionPanel';
import ScorePanel from '@/components/ScorePanel';
import GameOver from '@/components/GameOver';
import testQuestions from '@/lib/questions';

const Game = () => {
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
    const fetchQuestions = async (limit) => {
      try {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
          headers: {
            'X-Api-Key': import.meta.env.VITE_QUIZ_API_TOKEN,
          },
          params: {
            limit: limit,
          },
        });

        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
      }
    };
    fetchQuestions();
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
