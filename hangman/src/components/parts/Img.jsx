import React, { Component } from "react";
import step0 from "../../assets/0.png";
import step1 from "../../assets/1.png";
import step2 from "../../assets/2.png";
import step3 from "../../assets/3.png";
import step4 from "../../assets/4.png";
import step5 from "../../assets/5.png";
import step6 from "../../assets/6.png";
import step7 from "../../assets/7.png";
import step8 from "../../assets/8.png";
import step9 from "../../assets/9.png";
import step10 from "../../assets/10.png";
import step99 from "../../assets/99.png";

export default class Img extends Component {
  static defaultProps = {
    images: [
      step0,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
      step99,
    ],
  };
  render() {
    return (
      <div className="text-center img-container">
        <img
          className="photo"
          src={this.props.images[this.props.mistake]}
          alt=""
        />
      </div>
    );
  }
}
