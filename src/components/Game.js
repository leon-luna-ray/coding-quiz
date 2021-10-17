import React, { useEffect, useState } from 'react';
import QuestionPanel from './QuestionPanel';
import AnswerPanel from './AnswerPanel';
import ScorePanel from './ScorePanel';
import GameOver from './GameOver';
import questions from './questions';

const Game = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  // Current question and score from state
  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));
  const question = questions[questionIndex].question;
  const choices = questions[questionIndex].choices;
  const answer = questions[questionIndex].answer;

  // Avoid resetting score on reload
  useEffect(() => {
    if (userScore) {
      setScore(userScore);
    }
  }, [userScore]);

  // Update local storage on score state change
  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  const handleAnswer = (userChoice) => {
    // add additional logic here to show which one is the correct one
    if (userChoice === answer) {
      setScore(score + 1);
      setQuestionIndex(questionIndex + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  // Handle game over
  if (questionIndex === questions.length - 1) {
    return <GameOver score={score} />;
  }

  return (
    <section className='game'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' score={score} />
        <QuestionPanel className='question-panel' question={question} />
        <AnswerPanel
          className='answer-panel'
          choices={choices}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      </div>
    </section>
  );
};

export default Game;
