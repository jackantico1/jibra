import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cajunConnectionScreen1.png';

class Sample extends Component {

  render() {
    return (
      <div className="sample">
        <h1 className="title">{this.props.title}</h1>
        <div className="containerOne">
          <div className="image">
            <img  src={CajunConnectionScreen} alt="Cajun Connection Screenshot"/>
          </div>
          <div>
            <p className="text">
              Cajun Connection is a social media app made for young proffesionals to give ananayous feedback on each other's resumes,
              portfolio's, and proffesional work. It allows users to create profiles and form connections with other students/young 
              proffesionals interested in growing their network.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;