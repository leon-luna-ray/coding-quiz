import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@/components/Button';

const HighScores = () => {
  let history = useHistory();

  const redirectHome = () => {
    history.push('/');
  };

  return (
    <div className='container'>
      <div className='start-panel'>
        <h1>High Scores</h1>
        <Button id='home-btn' text='Home' onClick={redirectHome} />{' '}
      </div>
    </div>
  );
};

export default HighScores;
