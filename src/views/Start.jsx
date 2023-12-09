import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='container h-screen flex justify-center items-center'>
      <div className='start-panel flex-col-1 items-center justify-center border h-max px-[2rem] py-[3rem] rounded-xl'>
        <div className='start-title'>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='start-btns'>
          <Link id='start-btn' className='btn' to='/game'>JavaScript Quiz</Link>
          {/* <Link id='highscore-btn' className='btn' to='/high_scores'>High Scores</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Start;
