import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text, index }) => {
  const { handleAnswerSubmit, quizType, isCorrect, currentQuestion } = useGameContext();
  const isThisCorrect = isCorrect !== null && currentQuestion?.correct_answers?.[`${letter}_correct`] === "true";
  
  return (
    <button 
      className={`w-full btn flex gap-4 justify-center ${quizType.slug} ${isCorrect !== null ? 'disabled' : ''} ${isThisCorrect ? 'correct' : ''}`} 
      onClick={() => { handleAnswerSubmit(letter); }}
    >
      <p className='font-[500]'>{capitalizeLastLetter(letter)}:</p>
      <p className='font-jetbrains'>{text}</p>
    </button>
  );
};

export default AnswerButton;