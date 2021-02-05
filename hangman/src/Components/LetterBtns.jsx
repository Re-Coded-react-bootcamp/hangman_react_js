import React, { Component } from 'react';
import '../Styles/LetterBtns.css'

export default class Letters_Btn extends Component {
  componentDidUpdate() {
    if (this.props.counter === 0) {
      setTimeout(function () {
        alert('changed!');
      }, 100);
    }
  }

  render() {
    return (
      <div className="">
        <div class="row justify-content-center">
        <div class="col-4">
        </div>
        <div class="col-4">
              <div className="lettersBox">
           {this.props.letters.map((item) => (
          <button className="alphaLtrs"
            key={item}
            name={item}
            value={item}
            disabled={
              this.props.fetched && this.props.guessedLetters
                ? this.props.guessedLetters.has(item)
                : false
            }
            onClick={this.props.fetched ? this.props.clickedButton : null}
          >
            {item.toUpperCase()}
          </button>
        ))}
        </div>
        </div>
      </div>
       
      </div>
    );
  }
}
