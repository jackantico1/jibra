import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cajunConnectionScreen1.png';

let cajunConnectionText = "Cajun Connection is a social media app made for young proffesionals to give ananayous feedback on each other's resumes, portfolio's, and proffesional work. It allows users to create profiles and form connections with other students/young proffesionals interested in growing their network."

class Sample extends Component {

  render() {

    function returnDisplayImage(displayNum) {
      if (displayNum === "0") {
        return CajunConnectionScreen
      }
    }

    function returnDisplayText(displayNum) {
      if (displayNum === "0") {
        return cajunConnectionText
      }
    }

    return (
      <div className="sample">
        <h1 className="title">{this.props.title}</h1>
        <div className="containerOne">
          <img  src={returnDisplayImage(this.props.displayNum)} alt="Cajun Connection Screenshot"/>
          <p>{returnDisplayText(this.props.displayNum)}</p>
        </div>
      </div>
    );
  }
}

export default Sample;