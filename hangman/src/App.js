import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RandomwordAPI from "./component/randomwordAPI/randomwordAPI.jsx";
import Buttons from "./component/Butoons/Buttons";

function App() {
  const name = "Ali";
  return (
    <div className="App">
      <div className="Buttons">
        <Buttons />
      </div>
      <div className="words">
        <p>the random word is</p>

        <RandomwordAPI />
      </div>
    </div>
  );
}

export default App;
