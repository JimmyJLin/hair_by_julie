import React from 'react';
import Banner from '../utils/Banner';
import ContactMe from '../utils/ContactMe';

import './_about.scss';

const About = () => {
  return (
    <div id="about">
      <Banner title="About"/>

      <div className="container">
        <h5>Meet Julie Lin</h5>
        <div className="h_divider"></div>
        <p>I have been working in the beauty industry for 15 years, during which I have worked on photo shoots, fashion shows, hair shows, movie sets, even operated a salon for 2 years.  All those years of experiences helped me grow as a hairstylist and made me realize that my true passion is working behind a chair and taking care of my clients.  Every single person that sits on my styling chair deserves my full attention, my best quality of work and service because I truly care! </p>
        <p>I'm always driving to be better than I'm today! Please write a review and send me feedback, it will be greatly appreciated. Thank you for your time!</p>
      </div>

      <ContactMe />
    </div>
  )
}

export default About;
