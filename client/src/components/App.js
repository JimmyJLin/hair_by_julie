import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Landing from './landing/Landing';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container-fluid">
        <div>
          <Header />
          <Route exact path="/" component={Landing}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
