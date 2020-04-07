import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cajunConnectionScreen1.png';
import ThePMInternScreen1 from '../../assets/pmIntern1.png';
import ThePMInternScreen2 from '../../assets/pmIntern2.png';
import ThePMInternScreen3 from '../../assets/pmIntern3.png';

let cajunConnectionText = "Cajun Connection is a social media app made for young proffesionals to give ananayous feedback on each other's resumes, portfolio's, and proffesional work. It allows users to create profiles and form connections with other students/young proffesionals interested in growing their network."
let theProductManagementInternText = "The Product Management Intern is a website blog which features content on how what product management internships are like and how to get one. The website was built with react and is hosted for free by Github Pages."
let bcDiningMenusText = "BC Dining Menus is an iOS application which displays the menus of the 12 diffrent dining halls at BC. The app scrapes information from the hard-to-read BC Dining website and displays it in a friendly format."

class Sample extends Component {

  render() {

    function returnDisplayImage(displayNum) {
      if (displayNum === "0") {
        return CajunConnectionScreen
      } else if (displayNum === "1") {
        return ThePMInternScreen3
      } else if (displayNum === "2") {
        return CajunConnectionScreen
      }
    }

    function returnDisplayText(displayNum) {
      if (displayNum === "0") {
        return cajunConnectionText
      } else if (displayNum === "1") {
        return theProductManagementInternText
      } else if (displayNum === "2") {
        return bcDiningMenusText
      }
    }

    return (
      <div className="sample">
        <h1 className="title">{this.props.title}</h1>
        <div className="containerOne">
          <img  src={returnDisplayImage(this.props.displayNum)} alt="Screenshot"/>
          <p>{returnDisplayText(this.props.displayNum)}</p>
        </div>
      </div>
    );
  }
}

export default Sample;