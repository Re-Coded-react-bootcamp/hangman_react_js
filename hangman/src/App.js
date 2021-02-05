import React from "react";
import Hangman from "./component/game.jsx";
import Spinner from "./component/spinner.jsx";
import Typewriter from "./component/typeffect.jsx";
import "./App.css";
import i3 from "./component/images/3.png";
import i4 from "./component/images/4.png";
import i5 from "./component/images/5.png";
import i6 from "./component/images/6.png";
import i7 from "./component/images/7.png";
import i8 from "./component/images/8.png";
import i9 from "./component/images/9.png";
import i10 from "./component/images/11.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: [],
      fetched: false,
      poctures: [i3, i4, i5, i6, i7, i8, i9, i10],
      try: 7,
    };
  }

  //fetching the API
  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          fetched: true,
          word: data,
        });
      });
  }
  //

  render() {
    if (!this.state.fetched) {
      return <Spinner />;
    } else {
      return (
        <div className="general">
          <div className="componenets">
            <div className="typewriter">
              <Typewriter />
            </div>
            <div className="hangman">
              <Hangman
                word={this.state.word}
                letters={"abcdefghijklmnopqrstuvwxyz"}
                img={this.state.poctures}
                try={this.state.try}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
