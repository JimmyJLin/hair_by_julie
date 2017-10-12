import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Landing from './landing/Landing';
import Services from './services/Services';
import About from './about/About';
import Reviews from './reviews/Reviews';
import Contact from './contact/Contact';
import Appointment from './appointment/Appointment';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container-fluid">
        <div>
          <Header />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/services" component={Services}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/reviews" component={Reviews}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/appointment" component={Appointment}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
