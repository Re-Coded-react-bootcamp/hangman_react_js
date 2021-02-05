import React, { Component } from "react";
import video from "../assets/trim.mp4";
import ReactPlayer from "react-player";
import "./hangman.css";
import { Link } from "react-router-dom";
export default class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sound: false,
    };
  }
  render() {
    return (
      <div>
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          autoPlay={true}
          loop={true}
          controls={false}
          playsinline={true}
          playing={true}
          muted={!this.state.sound}
          style={{
            position: "absolute",
            zIndex: "-1",
            left: "50%",
            top: "50%",
            objectFit: "cover",
            transform: "translate(-50%,-50%)",
          }}
        />
        <Link
          onClick={() => {
            this.setState({ sound: !this.state.sound });
          }}
          id="sound"
          className="btn btn-lg btn btn-warning button"
        >
          {this.state.sound ? "Sound-" : "Sound+"}
        </Link>
        <Link to="/play" className="btn btn-lg btn btn-primary button">
          Play
        </Link>
      </div>
    );
  }
}
