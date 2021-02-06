import React, { Component } from 'react'

export default class GameStatus extends Component {


    render() {
        return (
            <div className="grid-col mt-10px">
                
               {
                (this.props.gameStatus==='active')
                ? <h2 className="trailes">Tries Left: {this.props.counter}</h2> 
                : (this.props.gameStatus == "win")
                    ? <h1 className="win">You Won the Game with {11 - this.props.counter} try(s)!</h1>
                    :<h1 className="lose"  {...this.props.onClick()}>  RIP!<br></br> Better Luck in the next life.   </h1>

               }
            </div>
        )
    }
}
