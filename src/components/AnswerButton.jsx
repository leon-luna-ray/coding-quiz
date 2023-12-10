import React from 'react';
import { useGameContext } from '@/contexts/GameContext';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text }) => {
  const { handleAnswer, quizType } = useGameContext();

  const btnColorClass = () => {
    switch (quizType) {
      case 'HTML':
        return 'gradient-orange';
      case 'JavaScript':
        return 'gradient-yellow';
      default:
        return '';
    }
  }
  return (
    <button className={btnColorClass()} onClick={() => { handleAnswer(letter); }}>
      <span className='choice-prefix'>{capitalizeLastLetter(letter)}. </span>
      <span className='choice-text'>{text}</span>
    </button>
  );
};

export default AnswerButton;
