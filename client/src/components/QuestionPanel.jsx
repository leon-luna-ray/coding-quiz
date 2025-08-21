import React from 'react';

const QuestionPanel = () => {
  const { currentQuestion, score } = useGameContext();

  return (
    <div>
      <p className='leading-[130%] !font-space text-[2rem] text-white tracking-[0.4px]'>{currentQuestion.question}</p>
      <div className="flex justify-center items-center">
      {/* <p className='h2'>Score: {score}</p> */}
      </div>
    </div>
  );
};

export default QuestionPanel;
