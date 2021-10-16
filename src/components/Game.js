import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Button from './Button';
import QuestionPanel from './QuestionPanel';
import AnswerPanel from './AnswerPanel';
import ScorePanel from './ScorePanel';
import { useHistory } from 'react-router-dom';
import questions from './questions';

const Game = () => {
  let history = useHistory();
  const quizQuestions = questions;
  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));
  const [gameStarted] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quizQuestions[0]);

  useEffect(() => {
    if (userScore) {
      setScore(userScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  const redirectHome = () => {
    history.push('/');
  };

  const handleCorrect = () => {
    setScore(score + 1);
  };

  return (
    <section className='game'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' score={score} />
        {/* <Button id='home-btn' text='Home' onClick={redirectHome} /> */}
        <br />
        <QuestionPanel
          className='question-panel'
          question={currentQuestion.question}
        />
        <AnswerPanel
          className='answer-panel'
          question={currentQuestion.question}
          choices={currentQuestion.choices}
          answer={currentQuestion.answer}
          handleCorrect={handleCorrect}
        />

        <Prompt when={gameStarted} message='Are you sure to want to leave?' />
      </div>
    </section>
  );
};

export default Game;
