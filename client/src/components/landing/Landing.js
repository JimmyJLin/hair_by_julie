import React, { Component } from 'react';
import './_landing.scss'

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="container-fluid">
        <h1>
          Hello World!
        </h1>
        <p>
          Welcome to Node Express React Landing Page!
        </p>
      </div>
    );
  }
};

export default Landing;
