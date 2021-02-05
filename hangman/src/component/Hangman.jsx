import React, { Component } from 'react'
import ImagesCount from "./ImagesCount"
import Buttons from "./Buttons";
import PlayAgain from "./PlayAgainn"
import SecretWord from "./SecretWord";
import GameStatus from "./GameStatus";
import Hint from "./Hint";
import Header from "./Header";



//I need to do the game status
export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
             counter:10,
            word:"",
           UsedLetters:[],
           correctLetters:[],
           isLoaded:false,
           hint: []

        };
        
      }

     


      componentDidMount() {
        fetch("https://random-word-api.herokuapp.com/word?number=1")
          .then((res) => res.json())
          .then(
            (result) => {
              
              this.setState({
                isLoaded: true,
                word: result.toString()

              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error
              });
            }
          );
      }
      
    
    render() {
      

        const giveHint = (boolean) => {
           
            if(this.state.hint.length>1 && boolean==true){
                alert("You only have two hints");
                return
            }

            for (let index = 0; index < this.state.word.length; index++) {
              
                let letter = this.state.word[index];
               
                if(!this.state.correctLetters.includes(letter) && !this.state.hint.includes(letter)){
                    

                    this.setState(state => {
                        const hint = [...state.hint, letter];
                        return { hint,};
                    });

                    this.setState(state => {
                        const UsedLetters = [...state.UsedLetters, letter];
                        return { UsedLetters,};
                    });

                    this.setState(state => {
                        const correctLetters = [...state.correctLetters, letter];
                        return {correctLetters,};
                    });
        
                      return
                   
                }
            }
        }

        
        const checkWin =()=>{
            let status="win";
            this.state.word.split("").forEach(letter =>{
                if(!this.state.correctLetters.includes(letter)){
                    status="active"
                }
            })
            return status;
        }
        const gameStatus = this.state.counter === 0 ? 'Lost'  : checkWin();

        
     


        //when the letter is wrong the counter increases
        const counterIncrease = () => {
            const  newCounter=this.state.counter -1 
             this.setState({counter:newCounter})  
        }


            //checking the letter if it is correct or worng / adding it to the used array
        const CheckLetter = (letter)=>{
            if (gameStatus !== 'active' || this.state.counter === 0)  
                return;
            
            //it addes the letter to the USEDLETTERS array in the state 
            this.setState(state => {
                const UsedLetters = [...state.UsedLetters, letter];
                return { UsedLetters,};
            });

            //if the word includes the letter we add the letter to our correct letters list
            if(this.state.word.includes(letter)){
                this.setState(state => {
                    const correctLetters = [...state.correctLetters, letter];
                    return {correctLetters,};
                });
            }else{ counterIncrease(); }

        }



        //checking and returning btn status
        const btnStatus=(btnLetter)=>{
            return  (this.state.UsedLetters.includes(btnLetter));  ;
        }

        
        return (
            <div className="grid-1">
            
                <Header />
                <div className="buttons">
                    {utilities.generateLetters(97,122).map(letter =>
                        <Buttons 
                            key={letter}
                            letter={letter} 
                            onClick={CheckLetter} 
                            status={btnStatus(letter)}
                        />
                    )}
                </div>
                
                <div className="grid-2" >
                   
                  <div className="grid-col mt-1">
                    {
                        (!this.state.isLoaded)
                        ? <div>Looking for a Word...</div>
                        :   <React.Fragment>
                                <SecretWord word={this.state.word} correctLetters={this.state.correctLetters}/>
                                <GameStatus gameStatus={gameStatus} counter={this.state.counter} onClick={giveHint}/>
                            </React.Fragment>
                    } 
                    <div className="d-inline mt-2">
                        <PlayAgain onClick={this.props.startNewGame}  />
                        <Hint  onClick={giveHint} hint={this.state.hint} />
                    </div>
                    </div>     
                    
                    
                    <div className="right" style={{textAlign:"right"}}>
                    
                    <ImagesCount counter={this.state.counter}/>
                    </div>
                   
            
                </div>
                        
                
              
               
            </div>
        )//END OF RETURN 
    }//END OF RENDER 
}//END OF CLASS






const utilities={
    generateLetters: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => String.fromCharCode(min + i)),

}