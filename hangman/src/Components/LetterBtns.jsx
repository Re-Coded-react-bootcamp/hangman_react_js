import React, { Component } from 'react'

export default class Letters_Btn extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pressed: new Set()
		}
		// this.clickedButton = this.clickedButton.bind(this)
	}

    render() {
		
		this.state.pressed.add(this.props.letter)
		
        return (
			<div>
				{this.props.letters.map( item => <button name={item} value={item} disabled={this.state.pressed.has(item)} onClick={this.props.clickedButton} >{item}</button>)}
			</div>
		)
    }
}