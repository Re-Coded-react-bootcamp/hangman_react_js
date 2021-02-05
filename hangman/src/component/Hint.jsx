import React, { Component } from 'react'


export default class Hint extends Component {
    constructor(props){
        super(props)
    }

 

    render() {
   
        return (
      
          <button className="btn" 
          onClick={() => this.props.onClick(true)}
          > Hint 
          </button>

          
        

        )
    }
}
