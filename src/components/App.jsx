import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './Start';
import Game from './Game';
import HighScores from './HighScores';
import '../styles/style.css';

const App = () => {
  return (
    <main className='app'>
      <Router>
        <Switch>
          <Route path='/' exact component={Start} />
          <Route path='/game' exact component={Game} />
          <Route path='/high_scores' exact component={HighScores} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
