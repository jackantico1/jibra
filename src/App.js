import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Sample from './components/Sample/Sample';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="appContainerOne">
          <Header/>
          <NavBar/>
        </div>
        <Sample title="Cajun Connection" displayNum="0"/>
        <Sample title="The Product Management Intern" displayNum="1"/>
      </div>
    );
  }
}

export default App;
