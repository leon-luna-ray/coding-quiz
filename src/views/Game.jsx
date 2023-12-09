import React from 'react';
import { GameProvider, useGameContext } from '../contexts/GameContext';
import LoadingScreen from '@/views/LoadingScreen';
import AnswerPanel from '@/components/AnswerPanel';
import QuestionPanel from '@/components/QuestionPanel';
import ScorePanel from '@/components/ScorePanel';
import GameOver from '@/components/GameOver';

const GameContent = () => {
  const {
    loading,
    score,
    currentQuestion,
    currentQuestionChoices,
    handleAnswer,
  } = useGameContext();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!currentQuestion) {
    return <p>No more questions!</p>;
  }

  return (
    <main className='game container'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' score={score} />
        <QuestionPanel className='question-panel' question={currentQuestion.question} />
        <AnswerPanel
          className='answer-panel'
          choices={currentQuestionChoices}
          handleAnswer={handleAnswer}
        />
      </div>
    </main>
  );
};

const Game = () => (
  <GameProvider>
    <GameContent />
  </GameProvider>
);

export default Game;