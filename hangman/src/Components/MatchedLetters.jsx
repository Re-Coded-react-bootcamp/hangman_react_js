import React, { Component } from 'react';
import '../Styles/MatchedLetters.css';
export default class MatchedLetters extends Component {
  render() {
    let { guessedLetters, word } = this.props;

    return (
      <div>
        {word.split('').map((letter) => {
          let isLetterMached = guessedLetters && guessedLetters.has(letter);
          return (
            <>
              <p
                className={`letters ${
                  isLetterMached ? 'black-text' : 'white-text'
                }`}
              >
                {isLetterMached ? letter : '*'}
              </p>
              <p className="dashes">{'  '}</p>
            </>
          );
        })}
      </div>
    );
  }
}
