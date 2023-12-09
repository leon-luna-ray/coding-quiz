import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text }) => {
  const { handleAnswer } = useGameContext();
  return (
    <div
      className='choice-btn'
      onClick={() => {
        handleAnswer(text);
      }}
    >
      <span className='choice-prefix'>{capitalizeLastLetter(letter)}. </span>
      <span className='choice-text'>{text}</span>
    </div>
  );
};

export default AnswerButton;
