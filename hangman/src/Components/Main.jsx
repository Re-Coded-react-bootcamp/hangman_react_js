import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';

const initialState = {
  word: '',
  counter: 10,
  isGameOver: false,
  guessedLetters: [],
  alpha: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
};
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  render() {
    return (
      <div>
        <LetterBtn letters={this.state.alpha} />
        <MatchedLetters />
        <HangState />

        <div>
          <button> Hint </button>
          <button> Play Again </button>
        </div>
      </div>
    );
  }
}
