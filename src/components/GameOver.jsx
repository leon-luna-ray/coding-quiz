import React from 'react';
import { Link } from 'react-router-dom';

const GameOver = ({ score }) => {
  return (
    <div className='container'>
      <div className='start-panel'>
        <h1>Game Over</h1>
        <h2>Score</h2>
        <h1>{score}</h1>
        <Link id='home-btn' className='btn' to='/'>Home</Link>
      </div>
    </div>
  );
};

export default GameOver;
