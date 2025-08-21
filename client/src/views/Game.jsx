import React from 'react';
import { GameProvider, useGameContext } from '@/contexts/GameContext';
import LoadingScreen from '@/views/LoadingScreen';
import AnswerPanel from '@/components/AnswerPanel';
import QuestionPanel from '@/components/QuestionPanel';
import GameOver from '@/components/GameOver';

const GameContent = () => {
  const { loading, currentQuestion } = useGameContext();

  if (loading) return <LoadingScreen />;
  if (!currentQuestion) return <GameOver />;

  return (
    <div className="container flex-col-4 pt-[1.25rem] md:pt-[3rem]">
      <QuestionPanel className='question-panel' />
      <AnswerPanel className='answer-panel' />
    </div>
  );
};

const Game = () => (
  <GameProvider>
    <GameContent />
  </GameProvider>
);

export default Game;