import React from 'react';
import { GameProvider, useGameContext } from '@/contexts/GameContext';
import LoadingScreen from '@/views/LoadingScreen';
import AnswerPanel from '@/components/AnswerPanel';
import QuestionPanel from '@/components/QuestionPanel';
import ScorePanel from '@/components/ScorePanel';
import GameOver from '@/components/GameOver';

const GameContent = () => {
  const { loading, currentQuestion } = useGameContext();

  if (!loading) return <LoadingScreen />;
  if (!currentQuestion) return <GameOver />;

  return (
    <div className='container'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' />
        <QuestionPanel className='question-panel' />
        <AnswerPanel className='answer-panel' />
      </div>
    </div>
  );
};

const Game = () => (
  <GameProvider>
    <GameContent />
  </GameProvider>
);

export default Game;