import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';
import '../Styles/Main.css';

const initialState = {
  word: [],
  fetched: false,
  error: null,
  counter: 10,
  machedWord: [],
  isWon: false,
  guessedLetters: new Set(),
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
            word: result[0].split(''),
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
    this.getdata();
    this.setState((prevState) => {
      if (prevState.guessedLetters) {
        prevState.guessedLetters.clear();
      }
      return {
        ...initialState,
        guessedLetters: prevState.guessedLetters,
      };
    });
  };

  clickedButton = (event) => {
    let letterClicked = event.target.name;
    if (!this.state.word.includes(letterClicked)) {
      this.setState((prevState) => {
        return {
          counter: prevState.counter - 1,
          guessedLetters: prevState.guessedLetters.add(letterClicked),
        };
      });
    } else {
      this.setState((prevState) => {
        prevState.word.map((item, i) => {
          if (item === letterClicked) {
            prevState.machedWord[i] = item;
          }
        });

        return {
          guessedLetters: this.state.guessedLetters.add(letterClicked),
          machedWord: prevState.machedWord,
          isWon: prevState.word.join('') === prevState.machedWord.join(''),
        };
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="counter"> Counter: {this.state.counter}</div>
          </div>
          <div className="col-4"></div>
        </div>

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

        <HangState counter={this.state.counter} isWon={this.state.isWon} />
      </div>
    );
  }
}
