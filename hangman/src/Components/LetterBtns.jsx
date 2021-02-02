import React, { Component } from 'react'

export default class Letters_Btn extends Component {

	// constructor(porps) {
	// 	super(props)

	// }
    render() {
        return (
			<div>
				{this.props.letters.map( item => <button name={item} value={item}>{item}</button>)}
			</div>
		)
    }
}