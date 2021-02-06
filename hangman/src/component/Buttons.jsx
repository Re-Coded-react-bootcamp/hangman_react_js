import React, { Component } from "react";


export default class Button extends Component {
  constructor(props) {
    super(props);

  }

 


  render() {
    return (
    
      <button
       disabled={ this.props.status}
        className={"buttonStyle "+ this.props.status}
       onClick={() => this.props.onClick(this.props.letter)}
      >
      {this.props.letter}
     
    </button>
  
      
    
       
     
     
    );
  }
}
