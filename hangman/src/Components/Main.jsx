import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';
import Hello from './Hello'

const initialState = {
  word: '',
  fetched: false,
  error: null,
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
};
export default class Main extends Component {
  constructor(props) {
    super(props);
      this.state = { ...initialState };
  }

  getdata = () => {fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then( res => res.json())
  .then( result => this.setState({ 
    word: result[0],
    fetched: true
    }), 
    error => {this.setState({
      error: error 
      })
    });
  }

 componentDidMount() {
   this.getdata()
 }
 
  handlePlayAgain = () => {
    this.getdata()
    this.setState({
      word: '',
      fetched: false,
      error: null,
      counter: 10,
      isGameOver: false,
      guessedLetters: new Set(),
      alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
    });
  };

  clickedButton = (event) => {
    if (!this.state.word.includes(event.target.name.toLowerCase())) {
      this.setState({ 
        counter: this.state.counter - 1,
        guessedLetters: this.state.guessedLetters.add(event.target.name) 
      })
       console.log("hello world")
       
     }
    else {
        this.setState({
        guessedLetters: this.state.guessedLetters.add(event.target.name)
      })
     }
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>

        <LetterBtn letters={this.state.alpha} clickedButton={this.clickedButton} 
        guessedLetters={this.state.guessedLetters} counter={this.state.counter} fetched={this.state.fetched} />
        <Hello />
        <MatchedLetters letters={this.state.word} guessedLetters={this.state.guessedLetters} fetched={this.state.fetched} />
        <HangState />

        <div>
          <button onClick={this.handleh}> Hint </button>
          <button onClick={this.handlePlayAgain}> Play Again </button>
        </div>
      </div>
    );
  }
}
