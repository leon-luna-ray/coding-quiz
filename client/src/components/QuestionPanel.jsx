import React from 'react';
import { useGameContext } from '@/contexts/GameContext';

const QuestionPanel = () => {
  const { currentQuestion, isCorrectResponse } = useGameContext();

  const isCorrectText = isCorrectResponse ? 'Correct!' : 'Incorrect';

  return (
    <div>
      <p className='leading-[130%] !font-space text-[2rem] text-white tracking-[0.4px]'>{currentQuestion.question}</p>
      <div className="flex justify-center items-center pt-[2rem]">
        <p className={`${isCorrectResponse === null ? 'opacity-0' : 'opacity-100'} h2 transition-all-300`}>{isCorrectText}</p>
      </div>
    </div>
  );
};

export default QuestionPanel;
