import React, { Component } from 'react'

export default class Letters_Btn extends Component {

    render() {
        return (
			<div>
				{this.props.letters.map( item => <button key={item} name={item} 
					value={item} disabled={this.props.guessedLetters.has(item)} 
					onClick={this.props.clickedButton} >{item}</button>)}
			</div>
		)
    }
}