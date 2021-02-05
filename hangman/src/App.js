
import './App.css';

import  React, { useState } from 'react';
import Hangman from "./component/Hangman";

function App() {
  const [gameId, setGameId]= useState(1)
  
  return (
    <div className="App">
    
      <Hangman key={gameId} startNewGame={() => setGameId(gameId +1)} />
    </div>
  );
}



export default App;

