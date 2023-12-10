import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text }) => {
  const { handleAnswer } = useGameContext();
  return (
    <button className='btn' onClick={() => {handleAnswer(letter);}}>
      <span className='choice-prefix'>{capitalizeLastLetter(letter)}. </span>
      <span className='choice-text'>{text}</span>
    </button>
  );
};

export default AnswerButton;
