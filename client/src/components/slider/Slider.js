import React, {Component} from 'react';
import Sliders from 'react-slick';

import './_slider.scss'
import imageOne from './images/slide-1.jpg'
import imageTwo from './images/slide-2.jpg'
import imageThree from './images/slide-3.jpg'

class Slider extends Component {
  render() {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div id="main_slider">
        <Sliders {...settings}>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={imageOne} alt=""/>
            </div>
          </div>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={imageTwo} alt=""/>
            </div>
          </div>
          <div id="carousel_container">
            <div id="carousel_img">
              <img src={imageThree} alt=""/>
            </div>
          </div>
        </Sliders>
      </div>
    )
  }
}

export default Slider;
