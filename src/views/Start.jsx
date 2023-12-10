import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='container flex justify-center items-center'>
      <div className='flex-col-2 items-center justify-center border h-max py-[2rem] px-[3rem] rounded-xl'>
        <div>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='flex-col-1 w-full'>
          <Link className='btn tertiary' to='/quiz/html'>HTML Quiz</Link>
          <Link className='btn secondary' to='/quiz/javascript'>JavaScript Quiz</Link>
          <Link className='btn' to='/quiz/python'>Python Quiz</Link>
          {/* <Link className='btn secondary' to='/high_scores'>High Scores</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Start;
