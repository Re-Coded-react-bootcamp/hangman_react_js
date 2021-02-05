import React, { Component } from "react";
class game extends Component {
  constructor(props) {
    super(props);
    var APIWORD = props.word.toString();
    console.log(APIWORD);

    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: APIWORD,
      show: false,
    };
  }
  //peshandani hintaka
  handleshow = () => {
    const show1 = this.state.show;
    this.setState({
      show: !show1,
    });
  };

  //agar pitakay tedabu awa ba wak xoy bi agar na _ dabne
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
    });
  };

  //value of pressed button

  handleGuess = (e) => {
    let valueletter = e.target.value;
    this.setState((update) => ({
      //lerada value buttonaka dacheta naw settaka
      guessed: update.guessed.add(valueletter),
      mistake: update.mistake + (update.answer.includes(valueletter) ? 0 : 1),
      // hamukat lera update dakatawa
    }));
  };

  //lera buttonakan drust abn
  generateButtons() {
    return this.props.letters.split("").map((letter) => (
      //buttonaka lera drust dabe
      <div className="Buttonss">
        <button
          value={letter}
          onClick={this.handleGuess}
          //leraad agar hatw aw pitay datawe match bu awa rstawaxo buttonaka
          //disable dabet
          disabled={this.state.guessed.has(letter)}
        >
          {letter}
        </button>
      </div>
    ));
  }

  render() {
    const mistake = this.state.mistake;
    const remain = this.props.try;
    const imagecounter = this.props.img[mistake];
    const Endofthegame = mistake >= remain;
    let keyboard = this.generateButtons();
    const hint = this.state.answer.substring(0, 3);
    const show = this.state.show;

    if (Endofthegame) {
      keyboard = "";
    }

    return (
      <div className="container">
        <div className="gueses">
          {mistake} chances left from {remain}
        </div>
        {show === true ? (
          <div className="Ans"> First Three letters:{hint}😁</div>
        ) : null}

        <div className="imagess">
          <img src={imagecounter} alt="pictures" />
        </div>
        <div className="text">
          {
            <div className="nn">
              <p>{!Endofthegame ? this.guessedWord() : this.state.answer}</p>
            </div>
          }

          <div className="bb">
            <p>{keyboard}</p>
            <button className="hint" onClick={this.handleshow}>
              Hint
            </button>

            <button className="resetButton" onClick={this.resetButton}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default game;
