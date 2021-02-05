import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                  <h1> The Hangman Game !</h1>
                 <p> Find the letters in the <b className="trailes">Secret</b> word or the human is going to be <b className="lose">Hanged.</b> </p>
            </div>
        )
    }
}
