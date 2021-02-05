import React, { Component } from 'react';
import '../Styles/MatchedLetters.css';
export default class MatchedLetters extends Component {
  render() {
    let { guessedLetters, word } = this.props;

    return (
      <div>
      <div class="row justify-content-center">
      <div class="col-4">
        </div>
        <div className="matchedLtrs">
        <div class="col-8">
        {word.split('').map((letter) => {
          let isLetterMached = guessedLetters && guessedLetters.has(letter);
          return (
               <>
              <p
                className={`letters ${
                  isLetterMached ? 'black-text' : 'white-text' }`} >
                {isLetterMached ? letter : '*'}
              </p>
              <p className="dashes">{'  '}</p> </> ); })}
              </div>
        </div>
        </div>
      </div>
    );
  }
}
