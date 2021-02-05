import React, { Component } from "react";
import { Container } from "react-bootstrap";
export default class Hangstats extends Component {
  render() {
    return (
      <center>
        <Container style={({ padding: "5px" }, { paddingBottom: "15px" })}>
          {this.props.hs}
        </Container>
      </center>
    );
  }
}
