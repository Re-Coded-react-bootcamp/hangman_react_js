import React, { Component } from 'react';
import LetterBtn from './LetterBtns'

export default class Main extends Component {

	constructor() {
        super()
        this.state = {
        alpha: ['A', 'B', 'C', 'D','E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
	}
	
	render() {
		return (
			<div>
				<LetterBtn letters={this.state.alpha} />
			</div>
		)
	}
}
