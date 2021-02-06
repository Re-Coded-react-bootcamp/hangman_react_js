
import './App.css';

import  React, { useState } from 'react';
import Hangman from "./component/Hangman";
import newGame from "./newGame.mp3";

function App() {
  const [gameId, setGameId]= useState(1)
  const newGmae=() => {
    setGameId(gameId +1)
    let audio = new Audio(newGame)
    audio.play()
  
  }
  
  return (
    <div className="App">
    
      <Hangman key={gameId} startNewGame={newGmae} />
    </div>
  );
}




export default App;

