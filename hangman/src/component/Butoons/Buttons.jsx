import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    const letters = "ABCDEFGHIJLMNOPQRSTUV";
  }
}

/*
 <div>
    <Block {...props}>
      {letters.map(letter => (
        <li
          key={letter}
          className="digit"
          disabled={props.guesses.includes(letter) ? true : false}
          onClick={props.onClick}
        >
          {letter}
        </li>
      ))}
    </Block>

*/
