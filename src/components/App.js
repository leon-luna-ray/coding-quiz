import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import api from '../api/api';
import axios from 'axios';
import Start from './Start';
import Game from './Game';
import HighScores from './HighScores';
import '../styles/style.css';

// const apiKey = '/questions?apiKey=gpVMgV0KdzCQI3oQBr4a8EGNpc0HnJqPcK2MvVYu';
// const questionLimit = 10;
// const categories = { coding: `&category=code&limit=` };

const App = () => {
  useEffect(() => {
    async function fetchQuestons() {
      const questions = await axios.get(
        'https://quizapi.io/api/v1/questions?apiKey=gpVMgV0KdzCQI3oQBr4a8EGNpc0HnJqPcK2MvVYu&category=code&limit=20'
      );
      console.log(questions.data);
    }
    fetchQuestons();
  }, []);

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
