import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

const HighScores = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate('/');
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
