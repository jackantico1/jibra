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
        <Sample title="Cars Against Colon Cancer" displayID="cacc"/>
        {/* <Sample title="BC Dining Menus" displayID="bcdm"/> */}
        <Sample title="The Product Management Intern" displayID="pmi"/>
        <Sample title="Page Master" displayID="pm"/>
        <Sample title="Cajun Connection" displayID="cc"/>
      </div>
    );
  }
}

export default App;
