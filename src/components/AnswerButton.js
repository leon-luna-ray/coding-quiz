import React from 'react';
const AnswerButton = ({ prefix, text, onClick }) => {
  return (
    <div className='choice-container' onClick={onClick}>
      <p className='choice-prefix'>{prefix}</p>
      <p className='choice-text'>{text}</p>
    </div>
  );
};

export default AnswerButton;
