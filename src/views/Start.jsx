import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

const Start = () => {
  const navigate = useNavigate();

  const startNewGame = () => {
    navigate('/game');
  };

  const viewHighScores = () => {
    navigate('/high_scores');
  };

  return (
    <div className='container h-screen flex justify-center items-center'>

      <div className='start-panel flex-col-1 items-center justify-center border h-max px-[2rem] py-[3rem] rounded-xl'>
        <div className='start-title'>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='start-btns'>
          <Button
            id='start-btn'
            text={'JavaScript Quiz'}
            to={'/game'}
            onClick={startNewGame}
          />
          {/* <Button
            id='highscore-btn'
            text={'High Scores'}
            onClick={viewHighScores}
          /> */}
        </div>
      </div>

    </div>
  );
};

export default Start;
