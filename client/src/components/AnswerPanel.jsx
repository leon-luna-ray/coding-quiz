import React from 'react';
import AnswerButton from '@/components/AnswerButton';
import { useGameContext } from '@/contexts/GameContext';


const AnswerPanel = () => {
  const { currentQuestionChoices, isCorrect } = useGameContext();

  const buttons = currentQuestionChoices.map((choice, index) => {
    const letter = choice[0];
    const text = choice[1];
    console.log(choice);

    if (text === null) return;

    return <AnswerButton key={index} letter={letter} text={text}  index={index} />;
  })

  const responseText = isCorrect ? 'Correct!' : 'Incorrect!';

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className={`flex flex-col ${isCorrect === null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <h2 >{responseText}</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>{buttons}</div>
    </div>
  );
};

export default AnswerPanel;
