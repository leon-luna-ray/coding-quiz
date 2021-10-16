import React, { useEffect, useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import GameOver from './GameOver';
import QuestionPanel from './QuestionPanel';
import AnswerPanel from './AnswerPanel';
import ScorePanel from './ScorePanel';
import questions from './questions';

const Game = () => {
  let history = useHistory();
  const [gameStarted] = useState(true);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const userScore = parseInt(localStorage.getItem('coding-quiz-score'));
  const question = questions[questionIndex].question;
  const choices = questions[questionIndex].choices;
  const answer = questions[questionIndex].answer;

  // Avoid resetting score on reload
  useEffect(() => {
    if (userScore) {
      setScore(userScore);
      console.log(questionIndex);
      console.log(questions.length);
      console.log(questions.lastIndexOf());
    }
  }, []);

  // Update local storage score on state change
  useEffect(() => {
    localStorage.setItem('coding-quiz-score', score);
  }, [score]);

  // Game over

  const handleAnswer = (userChoice) => {
    // add additional logic here to show which one is the correct one
    if (userChoice === answer) {
      setScore(score + 1);
      setQuestionIndex(questionIndex + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  if (questionIndex === questions.length - 1) {
    return <GameOver score={score} />;
  }

  return (
    <section className='game'>
      <div className='game-panel'>
        <ScorePanel className='score-panel' score={score} />
        {/* <Button id='home-btn' text='Home' onClick={redirectHome} /> */}
        <br />
        <QuestionPanel className='question-panel' question={question} />
        <AnswerPanel
          className='answer-panel'
          choices={choices}
          answer={answer}
          handleAnswer={handleAnswer}
        />
        {/* 
        <Prompt when={gameStarted} message='Are you sure to want to leave?' /> */}
      </div>
    </section>
  );
};

export default Game;
