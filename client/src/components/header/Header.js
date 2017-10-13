import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './_header.scss'

class Header extends Component {

  componentDidMount(){
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div id="header" className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <Link to={'/'} className="brand-logo">Logo</Link>
            <Link
              onClick={this.handleToggle}
              to={'#'}
              ref="toggle"
              data-activates="mobile-demo"
              className="button-collapse"
            ><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to={'/services'}>Services</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/reviews'}>Reviews</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
              <li><Link to={'/appointment'}>Appointment</Link></li>

            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to={'/services'}>Services</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/reviews'}>Reviews</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
              <li><Link to={'/appointment'}>Appointment</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;
