import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';
import Header from './Header';

const title = "Use the alphabet below to guess the word, or click hint to get a clue."
const initialState = {
   word: [],
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
    this.state = { ...initialState 
  };
  }
 componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => res.json())
      .then((word) => this.setState({ word }));
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
    const { word } = this.state;
    return (
      <div>
      <Header title={title} />
      <p>{word}</p>
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
