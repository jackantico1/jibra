import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cajunConnectionScreen1.png';
import ThePMInternScreen from '../../assets/pmIntern.png';
import CarsAgainstCCScreen from '../../assets/cacc.png';
import PageMasterScreen from '../../assets/pg.png';

let cajunConnectionText = "Cajun Connection is a social media app made for young proffesionals to give ananayous feedback on each other's resumes, portfolio's, and proffesional work. It allows users to create profiles and form connections with other students/young proffesionals interested in growing their network."
let theProductManagementInternText = "The Product Management Intern is a website blog which features content on how what product management internships are like and how to get one. The website was built with React.js and is hosted for free by Github Pages."
//let bcDiningMenusText = "BC Dining Menus is an iOS application which displays the menus of the 12 diffrent dining halls at BC. The app scrapes information from the hard-to-read BC Dining website and displays it in a friendly format."
let carsAgainstColonCancerText = "Cars Against Colon Cancer is an annual car show held in West Hartford by Ben Coady to raise money in memory of his grandmother. He needed a website to help spread the word of his event and give possible partners something to look at. It's built with React.js and uses Firebase for analyzing it's web traffic."

class Sample extends Component {

  render() {

    function returnDisplayImage(displayID) {
      if (displayID === "cc") {
        return CajunConnectionScreen
      } else if (displayID === "pmi") {
        return ThePMInternScreen
      } else if (displayID === "cacc") {
        return CarsAgainstCCScreen
      } else if (displayID === "pm") {
        return PageMasterScreen
      }
    }

    function returnDisplayText(displayID) {
      if (displayID === "cc") {
        return cajunConnectionText
      } else if (displayID === "pmi") {
        return theProductManagementInternText
      } else if (displayID === "cacc") {
        return carsAgainstColonCancerText
      }
    }

    return (
      <div className="sample">
        <h1 className="title">{this.props.title}</h1>
        <div className="containerOneSample">
          <img  src={returnDisplayImage(this.props.displayID)} alt="Screenshot"/>
          <p className="sampleText">{returnDisplayText(this.props.displayID)}</p>
        </div>
      </div>
    );
  }
}

export default Sample;