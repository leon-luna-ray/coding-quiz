import React from 'react';
import { Routes, Route } from "react-router-dom"
import Start from '@/views/Start';
import Game from '@/views/Game';
import HighScores from '@/views/HighScores';
import '@/assets/styles/main.css';

const App = () => {
  return (
    <main className='app'>

      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/game' element={<Game />} />
        <Route path='/high_scores' element={<HighScores />} />
      </Routes>

    </main>
  );
};

export default App;
