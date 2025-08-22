import React from 'react';
import AnswerButton from '@/components/AnswerButton';
import { useGameContext } from '@/contexts/GameContext';


const AnswerPanel = () => {
  const { currentQuestionChoices, isCorrect } = useGameContext();

  const buttons = currentQuestionChoices.map((choice, index) => {
    const letter = choice[0];
    const text = choice[1];

    if (text === null) return;

    return <AnswerButton key={index} letter={letter} text={text} />;
  })

  const responseText = isCorrect ? 'Correct!' : 'Incorrect!';

  return (
    <div className="flex flex-col gap-[2rem]">
      <h2 className={isCorrect === null ? 'opacity-0' : 'opacity-100'}>{responseText}</h2>
      <div className='grid md:grid-cols-2 gap-4'>{buttons}</div>
    </div>
  );
};

export default AnswerPanel;
