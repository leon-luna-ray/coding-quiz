// Import necessary dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '@/views/Start';
import Game from '@/views/Game';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GameProvider } from '@/contexts/GameContext'; // Import GameProvider
import '@/assets/styles/main.css';

const App = () => {
  return (
    <GameProvider>
      <div className="flex flex-col justify-between h-screen">
      <div className="relative">
          <Header />
          <main className="">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/quiz/c" element={<Game />} />
              <Route path="/quiz/csharp" element={<Game />} />
              <Route path="/quiz/cpp" element={<Game />} />
              <Route path="/quiz/css" element={<Game />} />
              <Route path="/quiz/elixir" element={<Game />} />
              <Route path="/quiz/go" element={<Game />} />
              <Route path="/quiz/html" element={<Game />} />
              <Route path="/quiz/java" element={<Game />} />
              <Route path="/quiz/javascript" element={<Game />} />
              <Route path="/quiz/php" element={<Game />} />
              <Route path="/quiz/python" element={<Game />} />
              <Route path="/quiz/rust" element={<Game />} />
              <Route path="/quiz/sql" element={<Game />} />
              <Route path="/quiz/swift" element={<Game />} />
              <Route path="/quiz/typescript" element={<Game />} />
              {/* <Route path='/high_scores' element={<HighScores />} /> */}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </GameProvider>
  );
};

export default App;
