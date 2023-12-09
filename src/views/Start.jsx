import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@/components/Button';

const Start = () => {
  let history = useHistory();
  // Set score to 0 and redirect with useHistory hook
  const startNewGame = () => {
    localStorage.setItem('coding-quiz-score', 0);
    history.push('/game');
  };

  const viewHighScores = () => {
    history.push('/high_scores');
  };

  return (
    <div className='container h-screen'>
      <div className='start-panel'>
        <div className='start-title'>
          <h1>Coding Quiz!</h1>
        </div>
        <div className='start-btns'>
          <Button
            id='start-btn'
            text={'Start'}
            to={'/game'}
            onClick={startNewGame}
          />
          <Button
            id='highscore-btn'
            text={'High Scores'}
            onClick={viewHighScores}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
