import React from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cajunConnectionScreen1.png';
import ThePMInternScreen from '../../assets/pmIntern.png';
import CarsAgainstCCScreen from '../../assets/cacc.png';
import PageMasterScreen from '../../assets/pg.png';

const cajunConnectionText = "Cajun Connection is a social media app made for young professionals to give anonymous feedback on each other's resumes, portfolios, and professional work. It allows users to create profiles and form connections with other students/young professionals interested in growing their network.";
const theProductManagementInternText = "The Product Management Intern is a website blog which features content on how what product management internships are like and how to get one. The website was built with React.js and is hosted for free by Github Pages.";
const carsAgainstColonCancerText = "Cars Against Colon Cancer is an annual car show held in West Hartford by Ben Coady to raise money in memory of his grandmother. He needed a website to help spread the word of his event and give possible partners something to look at. It's built with React.js and uses Firebase for analyzing its web traffic.";

const DISPLAY_IMAGES = {
  cc: CajunConnectionScreen,
  pmi: ThePMInternScreen,
  cacc: CarsAgainstCCScreen,
  pm: PageMasterScreen
};

const DISPLAY_TEXTS = {
  cc: cajunConnectionText,
  pmi: theProductManagementInternText,
  cacc: carsAgainstColonCancerText
};

const Sample = ({ title, displayID }) => {
  return (
    <div className="sample">
      <h1 className="title">{title}</h1>
      <div className="containerOneSample">
        <img src={DISPLAY_IMAGES[displayID]} alt={`${title} screenshot`} />
        <p className="sampleText">{DISPLAY_TEXTS[displayID]}</p>
      </div>
    </div>
  );
};

export default Sample;
