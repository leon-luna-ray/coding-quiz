import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const GameOver = ({ score }) => {
  let history = useHistory();

  const redirectHome = () => {
    history.push('/');
  };
  return (
    <div className='container'>
      <div className='start-panel'>
        <h1>Game Over</h1>
        <h2>Score</h2>
        <h1>{score}</h1>
        <Button id='home-btn' text='Home' onClick={redirectHome} />
      </div>
    </div>
  );
};

export default GameOver;
