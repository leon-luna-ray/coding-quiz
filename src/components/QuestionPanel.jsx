import React from 'react';
import { useGameContext } from '@/contexts/GameContext';

const QuestionPanel = () => {
  const { currentQuestion, score } = useGameContext();

  return (
    <div className='grid md:grid-cols-2 gap-x-[2rem]'>
      <h1 className='!font-red-hat !leading-[3rem] h4 md:h3'>{currentQuestion.question}</h1>
      <div className="flex justify-center items-center">
      <h1 className='h2'>Score: {score}</h1>
      </div>
    </div>
  );
};

export default QuestionPanel;
