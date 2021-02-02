import React, { Component } from 'react'

export default class Letters_Btn extends Component {

	constructor() {
		super()
		this.state = {
			pressed: new Set()
		}

		this.clickedButton = this.clickedButton.bind(this)
	}

	clickedButton = (event) => {
		this.setState({
			pressed: this.state.pressed.add(event.target.name)
		})
	}

    render() {
        return (
			<div>
				{this.props.letters.map( item => <button name={item} value={item} disabled={this.state.pressed.has(item)} onClick={this.clickedButton} >{item}</button>)}
			</div>
		)
    }
}