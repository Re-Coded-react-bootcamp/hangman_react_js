import React, { Component } from 'react';
import '../Styles/MatchedLetters.css';

export default class MatchedLetters extends Component {
  render() {
    let { guessedLetters, word } = this.props;

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-4"></div>
          <div className="matchedLtrs">
            <div className="col-8">
              {word.map((letter, i) => {
                let isLetterMached =
                  guessedLetters && guessedLetters.has(letter);
                return (
                  <p className={'letters'} key={i}>
                    <span
                      className={isLetterMached ? 'black-text' : 'white-text'}
                    >
                      {isLetterMached ? letter : '*'}
                    </span>
                    <span className="dashes">{'  '}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
