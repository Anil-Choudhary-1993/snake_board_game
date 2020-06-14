import React from 'react';
import './App.css';
import { start as startGame } from './game/game';

function App() {

  React.useEffect(() => {
    startGame();
  }, [])
  return (
      <div id="game-board"></div>
   );
}

export default App;
