import React, { Component } from 'react';
import './_landing.scss'

import imageOne from './hair.jpg'

import Slider from '../slider/Slider';
import ContactMe from '../utils/ContactMe';

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <Slider />

        <div id="about" className="container">
          <h1 id="title">Content Title</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div id="image_content">
          <img src={imageOne} alt=""/>
        </div>

        <div id="address" className="container">
          <h4>Hair By Julie</h4>
          <h5>123 5th Avenue 2nd Floor New York , NY 10003</h5>
          <h5>Tel: 917-386-5485</h5>
        </div>

        <ContactMe />

      </div>
    );
  }
};

export default Landing;
