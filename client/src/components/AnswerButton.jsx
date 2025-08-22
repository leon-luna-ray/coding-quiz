import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text }) => {
  const { handleAnswerSubmit, quizType } = useGameContext();
  return (
    <button className={`w-full btn flex gap-4 justify-center ${quizType.slug}`} onClick={() => { handleAnswerSubmit(letter); }}>
      <p className='font-[500]'>{capitalizeLastLetter(letter)}:</p>
      <p className='font-jetbrains'>{text}</p>
    </button>
  );
};

export default AnswerButton;
