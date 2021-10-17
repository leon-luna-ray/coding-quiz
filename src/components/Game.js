import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnswerPanel from './AnswerPanel';
import QuestionPanel from './QuestionPanel';
import ScorePanel from './ScorePanel';
import GameOver from './GameOver';
import testQuestions from './questions';

const Game = () => {
  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));
  // State
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  // Avoid resetting score on reload
  useEffect(() => {
    if (userScore) {
      setScore(userScore);
    }
    const fetchQuestions = async () => {
      const questions = await axios.get(
        'https://quizapi.io/api/v1/questions?apiKey=gpVMgV0KdzCQI3oQBr4a8EGNpc0HnJqPcK2MvVYu&category=code&limit=20'
      );
      setQuestions(questions.data);
      setLoading(false);
      console.log(questions.data);
    };
    fetchQuestions();
  }, []);
  // Update local storage on score state change
  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  // Handle Loading
  if (loading) {
    return <h1>Start!</h1>;
  }
  // Handle game over
  if (questionIndex === testQuestions.length - 1) {
    return <GameOver score={score} />;
  }
  // Game
  const question = questions[questionIndex].question;
  const choices = testQuestions[questionIndex].choices;
  const answer = testQuestions[questionIndex].answer;

  const handleAnswer = (userChoice) => {
    // add additional logic here to show which one is the correct one
    if (userChoice === answer) {
      setScore(score + 1);
      setQuestionIndex(questionIndex + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <section className='game'>
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
    </section>
  );
};

export default Game;
