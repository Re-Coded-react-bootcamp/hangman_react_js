import React, { useRef } from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  let ref = useRef();

  const handlePlayagain = () => {
    ref.current.handlePlayAgain();
  };

  return (
    <div className="App">
      <Header />
      <Main ref={ref} />
      <Footer handlePlayagain={handlePlayagain} />
    </div>
  );
}

export default App;
