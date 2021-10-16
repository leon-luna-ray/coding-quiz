import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start';
import Game from './Game';
import GameOver from './GameOver';
import HighScores from './HighScores';
import '../styles/style.css';

const App = () => {
  // Callback for getUserConfirmation method, invoked by using Prompt from RRD
  const getUserConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  };

  return (
    <main className='app'>
      <Router getUserConfirmation={getUserConfirmation}>
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/game' exact component={Game} />
          <Route path='/game_over' exact component={GameOver} />
          <Route path='/high_scores' exact component={HighScores} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;