import React from 'react';
import { useGameContext } from '@/contexts/GameContext';

const ScorePanel = () => {
  const { score } = useGameContext();
  
  return (
    <div id='game' className='justify-center flex-column pb-[2rem]'>
      <div className='hud-item'>
        <p className='hud-prefix h3 uppercase'>Score</p>
        <h1 className='hud-main-text' id='score'>{score}</h1>
      </div>
    </div>
  );
};

export default ScorePanel;
