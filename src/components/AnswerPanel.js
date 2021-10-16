import React from 'react';
import AnswerButton from './AnswerButton';

const AnswerPanel = ({ choices, answer, handleAnswer }) => {
  return (
    <div className='answer-panel'>
      {choices.map((choice, index) => {
        if (choice === answer) {
          return (
            <AnswerButton
              id='correct-answer'
              key={index}
              index={index}
              choice={choice}
              answer={answer}
              onClick={handleAnswer}
            />
          );
        } else {
          return (
            <AnswerButton
              key={index}
              index={index}
              choice={choice}
              answer={answer}
              onClick={handleAnswer}
            />
          );
        }
      })}
    </div>
  );
};

export default AnswerPanel;
