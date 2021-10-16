import React, { useEffect, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Button from './Button';
import questions from './questions';
import '../styles/game.css';

const Game = () => {
  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));
  const [gameStarted] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (userScore) {
      setScore(userScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className='container'>
      <div id='game' className='justify-center flex-column'>
        <p id='progressText' className='hud-prefix'>
          Question
        </p>
        <div className='hud-item'>
          <p className='hud-prefix'>Score</p>
          <h1 className='hud-main-text' id='score'>
            {score}
          </h1>
        </div>
      </div>
      <h1 id='question'>What is the answer to this question?</h1>
      {/* button */}
      <div className='choice-container' onClick={handleClick}>
        <p className='choice-prefix'> Score: </p>
        <p className='choice-text' data-number='1'></p>
      </div>
      <Button id='home-btn' text='Home' to='/' />
      <Prompt when={gameStarted} message='Are you sure to want to leave?' />
    </div>
  );
};

export default Game;
