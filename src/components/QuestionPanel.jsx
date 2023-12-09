import React from 'react';
import { useGameContext } from '@/contexts/GameContext';

const QuestionPanel = () => {
  const { currentQuestion } = useGameContext();

  return (
    <div id='question'>
      <h1>{currentQuestion.question}</h1>
    </div>
  );
};

export default QuestionPanel;
