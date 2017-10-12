import React from 'react';
import './_banner.scss';

const Banner = ({ title }) => {
  return (
    <div id="banner">
      <div className="color_container">
        <div id="title">{title}</div>
      </div>
    </div>
  )
}

export default Banner;
