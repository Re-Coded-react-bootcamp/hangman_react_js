import React, { Component } from 'react';

export default class MatchedLetters extends Component {
	render() {
		return (
			!this.props.fetched ?  ( 
				<div>
					Fetching data...
				</div>
			) :  (
				<div>{this.props.letters.split('').map( letter =>  this.props.guessedLetters.has(letter) ? letter : '_').toString()}</div>
			)
		)
	}
}
