import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text }) => {
  const { handleAnswer, quizType } = useGameContext();
  return (
    <button className={`w-full btn ${quizType.slug}`} onClick={() => { handleAnswer(letter); }}>
      <span>{capitalizeLastLetter(letter)}. </span>
      <span>{text}</span>
    </button>
  );
};

export default AnswerButton;
