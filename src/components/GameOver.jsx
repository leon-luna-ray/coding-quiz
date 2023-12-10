import React from 'react';
import { Link } from 'react-router-dom';
import { useGameContext } from '@/contexts/GameContext';

const GameOver = () => {
  const { score } = useGameContext();
  return (
    <div className='container flex justify-center items-center pt-[2rem] md:pt-[4rem]'>
      <div className='start-panel text-center flex-col-1 items-center'>
        <h1>Game Over</h1>
        <h2>Score</h2>
        <h1>{score}</h1>
        <Link className='btn w-max px-[2rem]' to='/'>Home</Link>
      </div>
    </div>
  );
};

export default GameOver;
