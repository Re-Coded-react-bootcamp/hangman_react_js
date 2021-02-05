import React, { Component } from 'react';
import LetterBtn from './LetterBtns';
import MatchedLetters from './MatchedLetters';
import HangState from './HangState';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import _ from 'lodash';


const initialState = {
  word: '',
  fetched: false,
  error: null,
  desc: null,
  fetcheddesc: false,
  errordesc: null,
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
          {this.setState({
            word: result[0],
            fetched: true,
          })
        this.getdesc()
        },
        (error) => {
          this.setState({
            error: error,
          });
        }
      );
  };

  getdesc = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${this.state.word}`)
    .then(res => res.json())
    .then( 
      (result) => 
      this.setState({
        desc: result,
        fetcheddesc: true,
      }),
      (error) => {
        this.setState({
          errordesc: error,
        });
      }
    );
  };

  componentDidMount() {
    this.getdata()
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
        guessedLetters: this.state.guessedLetters.add(event.target.name),
        corrletter: this.state.corrletter.add(event.target.name)
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
    let obj = this.state.desc;
    return (
      <div>
        <div>{this.state.counter}</div>

        {this.state.fetcheddesc ? 
          <div><div>{ _.get( obj, ["0", "meanings", "0", "definitions", "0", "definition"],'No Available Data!') } </div>
          {console.log(obj)}
          <MatchedLetters
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
          fetched={this.state.fetched}
        /></div> :
          <Loader
            type="Puff"
            color="#00BFFF"
            height={68}
            width={68}
            timeout={3000} 
          />
        }
          
         
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
