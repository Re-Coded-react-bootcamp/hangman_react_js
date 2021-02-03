import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';

const initialState = {
  word: '',
  counter: 10,
  isGameOver: false,
  guessedLetters: new Set(),
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
  lastupdate: null
};
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  handlePlayAgain = () => {
    this.setState({ ...initialState });
  };

  clickedButton = (event) => {
	this.setState({
		guessedLetters: this.state.guessedLetters.add(event.target.name),
		})
	}

  render() {
    return (
      <div>
        <LetterBtn letters={this.state.alpha} clickedButton={this.clickedButton} guessedLetters={this.state.guessedLetters} />
        <MatchedLetters />
        <HangState />

        <div>
          <button onClick={this.handleh}> Hint </button>
          <button onClick={this.handlePlayAgain}> Play Again </button>
        </div>
      </div>
    );
  }
}
