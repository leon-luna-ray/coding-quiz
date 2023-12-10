import React from 'react';
import { Routes, Route } from "react-router-dom"

import Start from '@/views/Start';
import Game from '@/views/Game';
import Header from '@/components/Header';
import Footer from '@/components/Footer'
import HighScores from '@/views/HighScores';
import '@/assets/styles/main.css';

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <main className='app page-center'>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/quiz/html' element={<Game />} />
          <Route path='/quiz/javascript' element={<Game />} />
          <Route path='/quiz/python' element={<Game />} />
          {/* <Route path='/high_scores' element={<HighScores />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
