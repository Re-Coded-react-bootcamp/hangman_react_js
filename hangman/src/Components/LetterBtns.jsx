import React, { Component } from 'react'

export default class Letters_Btn extends Component {


	componentDidUpdate() {
		if (this.props.counter === 0) {
		  setTimeout(function() {
			alert("changed!");
		},100)
	  
		}
	  }

    render() {
        return (
			<div>
				{this.props.letters.map( item => <button key={item} name={item} 
					value={item} disabled={this.props.fetched ? this.props.guessedLetters.has(item) : false} 
					onClick={ this.props.fetched ? this.props.clickedButton : null } >{item.toUpperCase()}</button>)}
			</div>
		)
    }
}