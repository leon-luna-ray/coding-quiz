import React from 'react';
import AnswerButton from '@/components/AnswerButton';

const AnswerPanel = ({ choices, answer, handleAnswer }) => {
  return (
    <div className='answer-panel'>
      {choices.map((choice, index) => {
        const letter = choice[0];
        const text = choice[1];
        if (text === null) {
          return;
        }
        return (
          <AnswerButton
            key={index}
            letter={letter}
            text={text}
            answer={answer}
            onClick={handleAnswer}
          />
        );
      })}
    </div>
  );
};

export default AnswerPanel;
