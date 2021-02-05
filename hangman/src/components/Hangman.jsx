import React, { Component } from "react";
import "./hangman.css";
import { Row, Col } from "react-bootstrap";
import Img from "./parts/Img";
import Hangstats from "./parts/Hangstats";
import Loading from "./parts/Loading";
import Stats from "./parts/Stats";
import Lost from "./parts/Lost";
import Win from "./parts/Win";

export default class Hangman extends Component {
  static defaultProps = {
    maxWrong: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: "",
      ld: true,
      hint: false,
    };
  }

  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1", {
      method: "Get",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res[0] = res[0].toUpperCase();
        console.log(res[0]);
        this.setState({ answer: res[0] });
        setTimeout(() => {
          this.setState({ ld: false });
        }, 1000);
      });
  }

  hintt = () => {
    this.setState({ hint: true });
  };

  handleGuess = (x) => {
    let letter = x.target.value;
    var rt = this.state.answer.includes(letter);
    this.setState((st) => ({
      gussed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
    return rt;
  };

  gussedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  generateButtons() {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
      <button
        className="work btn btn-lg button_h"
        key={letter}
        value={letter}
        onClick={(event) => {
          var all = event.target.className.split(" ");
          if (this.handleGuess(event)) {
            all.push("green");
          } else {
            all.push("red");
          }
          event.target.className = all.join(" ");
        }}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: "",
      ld: true,
      hint: false,
    });
    this.componentDidMount();
  };

  render() {
    const winner = this.gussedWord().join("") === this.state.answer;
    let hangStat = this.generateButtons();

    if (winner) {
      hangStat = "You Won !!";
    }

    return (
      <div className=" hangman ">
        {this.state.ld ? <Loading show={this.state.answer === ""} /> : null}
        <div className="glass_item">
          <h1 className="text-center hang  shadoww wight font">
            Hange the dude
          </h1>
          {!(winner || this.state.mistake === 10) ? (
            <Hangstats hs={hangStat} />
          ) : winner ? (
            <Win />
          ) : (
            <Lost />
          )}
        </div>
        <div style={{ marginBottom: "25px" }} className="text-center">
          <h2
            className={
              !(winner || this.state.mistake === 10)
                ? "guess shadoww wight"
                : winner
                ? "guess shadoww wight gr_cl"
                : "guess shadoww wight rd_cl"
            }
          >
            Guess the Word
          </h2>
          <h2
            className={
              !(winner || this.state.mistake === 10)
                ? "walamm"
                : winner
                ? "walamm gr_cl"
                : "walamm rd_cl"
            }
          >
            {!this.state.mistake !== 10 ? this.gussedWord() : this.state.answer}
          </h2>
        </div>

        <Row>
          <Col>
            <Img mistake={!winner ? this.state.mistake : 11} />
          </Col>
          <Col>
            <Stats
              mistake={this.state.mistake}
              maxWrong={this.props.maxWrong}
              resetButton={this.resetButton}
              answer={this.state.answer}
              show={!(winner || this.state.mistake === 10) ? true : false}
              win={winner}
              hint={this.state.hint}
              hintt={this.hintt}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
