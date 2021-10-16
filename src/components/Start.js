import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import '../styles/start.css';

const Start = () => {
  let history = useHistory();
  // Set score to 0 and redirect with useHistory hook
  const startNewGame = () => {
    localStorage.setItem('coding-quiz-score', 0);
    history.push('/game');
  };
  return (
    <div className='container'>
      <div className='flex-row'>
        <h1>Coding Quiz!</h1>
      </div>

      <Button
        id='start-btn'
        text={'Start'}
        to={'/game'}
        onClick={startNewGame}
      />
      <Button id='highscore-btn' text={'High Scores'} to={'/high_scores'} />
    </div>
  );
};

export default Start;
