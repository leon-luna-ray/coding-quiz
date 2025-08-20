import React from 'react';


const ScorePanel = ({ score }) => {
  return (
    <div className='flex items-center justify-center text-white gap-x-4'>
      <span className='h3 uppercase'>Score: </span>
      <span className='h3'>{score}</span>
    </div>
  );
};

export default ScorePanel;
