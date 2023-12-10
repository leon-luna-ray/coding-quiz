import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='container flex justify-center items-center md:pt-[12rem]'>
      <div className='start-panel flex-col-1 items-center justify-center border h-max px-[2rem] py-[3rem] rounded-xl'>
        <div className='start-title'>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='start-btns flex flex-col'>
          <Link id='start-btn' className='btn' to='/quiz/html'>HTML Quiz</Link>
          <Link id='start-btn' className='btn' to='/quiz/javascript'>JavaScript Quiz</Link>
          <Link id='start-btn' className='btn' to='/quiz/python'>Python Quiz</Link>
          <Link id='highscore-btn' className='btn secondary' to='/high_scores'>High Scores</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
