import React, { Component } from 'react'

export default class SecretWord extends Component {
    constructor(props){
        super(props)
    }
   
   
    render() {
        return (
            <div className="letters">
          
            {
                this.props.word.split("").map((letter, index) =>
                    this.props.correctLetters.includes(letter)
                    ?   <span key={index} className="lettersKnwn "> {letter} </span>
                    :   <span key={index} className="lettersNotKnw " > ? </span>
                    
                    )
        
        
        
            }

              
            </div>
        )
    }
}
