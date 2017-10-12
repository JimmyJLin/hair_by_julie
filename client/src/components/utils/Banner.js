import React from 'react';
import './_banner.scss';

const Banner = ({ title }) => {
  return (
    <div id="banner">
      <div id="title">{title}</div>
    </div>
  )
}

export default Banner;
