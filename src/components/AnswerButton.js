import React from 'react';
const AnswerButton = ({ index, choice, onClick }) => {
  return (
    <div
      className='choice-btn'
      onClick={() => {
        onClick(choice);
      }}
    >
      <span className='choice-prefix'>{index + 1}. </span>
      <span className='choice-text'>{choice}</span>
    </div>
  );
};

export default AnswerButton;
