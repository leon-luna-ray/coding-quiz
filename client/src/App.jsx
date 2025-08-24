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
          <main className="w-full">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/quiz/html" element={<Game />} />
              <Route path="/quiz/css" element={<Game />} />
              <Route path="/quiz/javascript" element={<Game />} />
              <Route path="/quiz/c" element={<Game />} />
              <Route path="/quiz/cpp" element={<Game />} />
              <Route path="/quiz/csharp" element={<Game />} />
              <Route path="/quiz/csh" element={<Game />} />
              <Route path="/quiz/holyc" element={<Game />} />
              <Route path="/quiz/objective-c" element={<Game />} />
              <Route path="/quiz/go" element={<Game />} />
              <Route path="/quiz/java" element={<Game />} />
              <Route path="/quiz/php" element={<Game />} />
              <Route path="/quiz/python" element={<Game />} />
              <Route path="/quiz/rust" element={<Game />} />
              <Route path="/quiz/swift" element={<Game />} />
              <Route path="/quiz/clojure" element={<Game />} />
              <Route path="/quiz/elixir" element={<Game />} />
              <Route path="/quiz/elm" element={<Game />} />
              <Route path="/quiz/erlang" element={<Game />} />
              <Route path="/quiz/fsharp" element={<Game />} />
              <Route path="/quiz/haskell" element={<Game />} />
              <Route path="/quiz/assembly" element={<Game />} />
              <Route path="/quiz/basic" element={<Game />} />
              <Route path="/quiz/cobol" element={<Game />} />
              <Route path="/quiz/fortran" element={<Game />} />
              <Route path="/quiz/common-lisp" element={<Game />} />
              <Route path="/quiz/pascal" element={<Game />} />
              <Route path="/quiz/brainfuck" element={<Game />} />
              <Route path="/quiz/emojicode" element={<Game />} />
              <Route path="/quiz/jsfuck" element={<Game />} />
              <Route path="/quiz/omgrofl" element={<Game />} />
              <Route path="/quiz/shakespeare" element={<Game />} />
              <Route path="/quiz/false" element={<Game />} />
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
