import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Start from '@/views/Start';
import Game from '@/views/Game';
import HighScores from '@/views/HighScores';
import '@/styles/main.css';

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
