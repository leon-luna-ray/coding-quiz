import React from 'react';
import { capitalizeLastLetter } from '@/lib/text';

const AnswerButton = ({ letter, text, onClick }) => {
  return (
    <div
      className='choice-btn'
      onClick={() => {
        onClick(text);
      }}
    >
      <span className='choice-prefix'>{capitalizeLastLetter(letter)}. </span>
      <span className='choice-text'>{text}</span>
    </div>
  );
};

export default AnswerButton;
