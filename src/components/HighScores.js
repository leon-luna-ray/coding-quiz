import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const HighScores = () => {
  let history = useHistory();
  // Set score to 0 and redirect with useHistory hook
  const redirectHome = () => {
    history.push('/');
  };
  return (
    <div>
      <h1>High Scores</h1>
      <Button id='home-btn' text='Home' onClick={redirectHome} />
    </div>
  );
};

export default HighScores;
