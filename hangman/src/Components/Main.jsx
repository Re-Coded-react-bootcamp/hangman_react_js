import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';

const initialState = {
  word: '',
  fetched: false,
  error: null,
  counter: 10,
  isGameOver: false,
  guessedLetters: new Set(),
  corrletter: new Set(),
  alpha: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
};
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  getdata = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then((res) => res.json())
      .then(
        (result) =>
          this.setState({
            word: result[0],
            fetched: true,
          }),
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  };

  componentDidMount() {
    this.getdata();
  }

  handlePlayAgain = () => {
    this.setState({
      ...initialState,
      guessedLetters: new Set()
    });
    this.getdata();
  };

  clickedButton = (event) => {
    let won = true
    if (!this.state.word.includes(event.target.name)) {
      this.setState({
        counter: this.state.counter - 1,
        guessedLetters: this.state.guessedLetters.add(event.target.name),
      });
    } else {
      this.setState({
        guessedLetters: guessedLetters.add(event.target.name),
        corrletter: corrletter.add(event.target.name)
      });
    }
    for (let letter of this.state.word) {
      if (this.state.guessedLetters.has(letter)) {
        continue
      }
      else {
        won = false
        break
      }
    }
    if (won) {
      alert('won')
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>{this.state.counter}</div>

         <MatchedLetters
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
          fetched={this.state.fetched}
        />
        <LetterBtn
          letters={this.state.alpha}
          clickedButton={this.clickedButton}
          guessedLetters={this.state.guessedLetters}
          counter={this.state.counter}
          fetched={this.state.fetched}
        />
       
        <HangState counter={this.state.counter} />
      </div>
    );
  }
}
