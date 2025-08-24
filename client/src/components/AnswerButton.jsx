import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text, index }) => {
  const { handleAnswerSubmit, quizType, isCorrectResponse, isResponded, correctAnswerKey } = useGameContext();

  const isCorrect = isResponded && letter === correctAnswerKey;

  return (
    <button
      className={`w-full btn flex gap-4 justify-center transition-all-300 ${quizType.slug} ${isResponded ? 'disabled' : ''} ${isCorrect ? 'correct' : ''}`}
      onClick={() => { handleAnswerSubmit(letter); }}
      disabled={isResponded}
    >
      <p className='font-[500]'>{capitalizeLastLetter(letter)}:</p>
      <p className='font-jetbrains'>{text}</p>
    </button>
  );
};

export default AnswerButton;