import React, { Component } from 'react'

export default class Letters_Btn extends Component {


	componentDidUpdate() {
		if (this.props.counter === 0) {
		  console.log('did mount')
		}
	  }

    render() {
        return (
			<div>
				{this.props.letters.map( item => <button key={item} name={item} 
					value={item} disabled={this.props.guessedLetters.has(item)} 
					onClick={this.props.clickedButton} >{item}</button>)}
					{console.log('render')}
			</div>
		)
    }
}