import React from 'react';
import { Link } from 'react-router-dom';

const HighScores = () => {
  return (
    <div className='container'>
      <div className='start-panel'>
        <h1>High Scores</h1>
        <Link id='home-btn' className='btn' to='/'>Home</Link>
      </div>
    </div>
  );
};

export default HighScores;
