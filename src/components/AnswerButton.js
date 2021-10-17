import React from 'react';
const AnswerButton = ({ letter, text, onClick }) => {
  return (
    <div
      className='choice-btn'
      onClick={() => {
        onClick(text);
      }}
    >
      <span className='choice-prefix'>{letter + 1}. </span>
      <span className='choice-text'>{text}</span>
    </div>
  );
};

export default AnswerButton;
