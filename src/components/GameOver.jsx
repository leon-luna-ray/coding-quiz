import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '@/contexts/GameContext';

const GameOver = () => {
  const { score } = useGameContext();
  return (
    <div className='container flex justify-center items-center pt-8 md:pt-16'>
      <div className='start-panel text-center flex-col-1 items-center'>
        <h1>Game Over</h1>
        <h2>Score</h2>
        <h1>{score}</h1>
        <Link className='btn w-max px-8' to='/'>Home</Link>
      </div>
    </div>
  );
};

export default GameOver;
