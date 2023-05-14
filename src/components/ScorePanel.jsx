import React from 'react';

const ScorePanel = ({ score }) => {
  return (
    <div id='game' className='justify-center flex-column'>
      <div className='hud-item'>
        <p className='hud-prefix'>Score</p>
        <h1 className='hud-main-text' id='score'>
          {score}
        </h1>
      </div>
    </div>
  );
};

export default ScorePanel;
