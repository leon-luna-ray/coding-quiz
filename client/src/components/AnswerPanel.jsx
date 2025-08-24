import React from 'react';
import AnswerButton from '@/components/AnswerButton';
import { useGameContext } from '@/contexts/GameContext';


const AnswerPanel = () => {
  const { currentQuestionChoices, handleNextQuestion } = useGameContext();

  const buttons = currentQuestionChoices.map((choice, index) => {
    const letter = choice[0];
    const text = choice[1];
    // console.log(choice);

    if (text === null) return;

    return <AnswerButton key={index} letter={letter} text={text}  index={index} />;
  })

  // const responseText = isCorrect ? 'Correct!' : 'Incorrect!';

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className={`flex gap-[2rem] justify-between`}>
        <h2>Correct</h2>
        <button className={`btn css px-[1rem]`} onClick={handleNextQuestion}>Continue</button>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>{buttons}</div>
    </div>
  );
};

export default AnswerPanel;
