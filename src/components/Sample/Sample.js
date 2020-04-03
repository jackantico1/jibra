import React, { Component } from 'react';
import './Sample.css';

class Sample extends Component {

  render() {
    return (
      <div className="sample">
        <h1 className="title">{this.props.title}</h1>
      </div>
    );
  }
}

export default Sample;