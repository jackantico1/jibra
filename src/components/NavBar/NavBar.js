import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <h1 className="navBarButton">Past Work</h1>
        <h1 className="navBarButton">About</h1>
      </div>
    );
  }
}

export default NavBar;