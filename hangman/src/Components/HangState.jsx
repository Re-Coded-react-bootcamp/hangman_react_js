import React, { Component } from 'react';

export default class HangState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
    };
  }

  importImage = () =>
    import(`../Images/${this.props.counter}.png`).then((image) => {
      this.setState({ image: image.default });
    });

  componentDidMount() {
    this.importImage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter !== this.props.counter && this.props.counter !== 0)
      this.importImage();
  }

  render() {
    return (
      <div className="">
        <img src={this.state.image} alt="hangman" />
      </div>
    );
  }
}
