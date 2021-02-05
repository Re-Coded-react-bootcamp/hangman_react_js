import React, { Component } from 'react'

export default class PlayAgainn extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            
            <button onClick={this.props.onClick}  className="btn blue" >Play Again</button>
           
        )
    }
}
