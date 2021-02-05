import React from "react";

import "react-simple-typewriter/dist/index.css";
import Typewriter from "react-simple-typewriter";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          paddingTop: "0px",
          margin: "0px",
          fontWeight: "small",
          color: "red",
          fontSize: "40px",
        }}
      >
        let's play{" "}
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: "30px",
            padding: "px",
          }}
        >
          <Typewriter
            loop
            cursor
            cursorStyle=""
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={1000}
            words={["Hangman😂"]}
          />
        </span>
      </h1>
    </div>
  );
}
