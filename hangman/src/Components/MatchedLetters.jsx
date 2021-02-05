import React, { Component } from 'react';

export default class MatchedLetters extends Component {
  render() {
    let { guessedLetters, word } = this.props;

    return (
      <div>
        <p>_</p>
        <p>{'  '}</p>
      </div>
    );
  }
}
