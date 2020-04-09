import React, { Component } from 'react';
import './Header.css';

class Header extends Component { 

  render() {
    return (
      <div className="header">

          <div className="containerOneHeader">
            <div className="logo">
              <h1 className="h1Logo">Jibra</h1>
            </div>
            <div className="subTitle">
              <h2>A Software Design Studio</h2>
            </div>
          </div>

          <div className="containerTwoHeader">
            
          </div>

      </div>
    );
  }
}

export default Header;