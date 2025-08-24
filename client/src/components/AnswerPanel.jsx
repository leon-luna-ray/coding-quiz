import React from 'react';
import AnswerButton from '@/components/AnswerButton';
import { useGameContext } from '@/contexts/GameContext';
import IconNext from '@/components/icons/IconNext';


const AnswerPanel = () => {
  const { currentQuestionChoices, handleNextQuestion } = useGameContext();

  const buttons = currentQuestionChoices.map((choice, index) => {
    const letter = choice[0];
    const text = choice[1];
    // console.log(choice);

    if (text === null) return;

    return <AnswerButton key={index} letter={letter} text={text} index={index} />;
  })

  // const responseText = isCorrect ? 'Correct!' : 'Incorrect!';

  return (
    <div className="flex flex-col gap-[4rem]">
      {/* <h2 className='text-center'>Correct</h2> */}

      <div className='grid md:grid-cols-2 gap-4'>{buttons}</div>
      <div className="flex justify-center items-center">
        <button className={`btn border-[2px] border-white px-[1rem] flex gap-[0.5rem] items-center w-max`} onClick={handleNextQuestion} aria-label="Next question">
          <p>Next</p>
          <IconNext />
        </button>
      </div>
    </div>
  );
};

export default AnswerPanel;
