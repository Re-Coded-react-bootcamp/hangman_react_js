import React, { Component } from "react";

export default class randomwordAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: [],
      fetched: false,
    };
  }
  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          fetched: true,
          word: json,
        });
      });
  }
  //

  render() {
    var { fetched, word } = this.state;
    if (!fetched) {
      return <div>data is loading....</div>;
    } else {
      return (
        <ul>
          {word.map((item) => (
            <li key={item}>{item.split("__")}</li>
          ))}
        </ul>
      );
    }
  }
}
