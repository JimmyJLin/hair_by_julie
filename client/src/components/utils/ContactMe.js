import React from 'react';
import { Link } from 'react-router-dom';

import './_contactme.scss';

const ContactMe = () => {
  return (
    <div id="contact_me">
      <h5>Contact Me Today</h5>
      <h5>To revitalize your look with expertly blended, multi-dimensional highlights.</h5>
      <Link to={'/contact'} className="waves-effect waves-light btn"><i className="material-icons right">email</i>Contact</Link>
    </div>
  )
}

export default ContactMe;
