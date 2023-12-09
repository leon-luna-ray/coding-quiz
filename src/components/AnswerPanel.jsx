import React from 'react';
import AnswerButton from '@/components/AnswerButton';
import { useGameContext } from '@/contexts/GameContext';


const AnswerPanel = () => {
  const { currentQuestionChoices } = useGameContext();

  return (
    <div className='answer-panel'>
      {currentQuestionChoices.map((choice, index) => {
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
          />
        );
      })}
    </div>
  );
};

export default AnswerPanel;
