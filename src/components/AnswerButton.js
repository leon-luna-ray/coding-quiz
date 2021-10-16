import React from 'react';
const AnswerButton = ({ index, choice, handleAnswer }) => {
  return (
    <div
      className='choice-btn'
      onClick={() => {
        handleAnswer(choice);
      }}
    >
      <span className='choice-prefix'>{index + 1}. </span>
      <span className='choice-text'>{choice}</span>
    </div>
  );
};

export default AnswerButton;
