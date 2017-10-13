import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="page-footer">

        <div className="fixed-action-btn vertical">
          <Link to={'/'} className="btn-floating btn-large red">
            <i className="large material-icons">mode_edit</i>
          </Link>
          <ul>
            <li><Link to={'/services'} className="btn-floating red"><i className="material-icons">menu</i></Link></li>
            <li><Link to={'/about'} className="btn-floating yellow darken-1"><i className="material-icons">face</i></Link></li>
            <li><Link to={'/reviews'} className="btn-floating green"><i className="material-icons">stars</i></Link></li>
            <li><Link to={'/contact'} className="btn-floating red"><i className="material-icons">call</i></Link></li>
            <li><Link to={'/appointment'} className="btn-floating blue"><i className="material-icons">schedule</i></Link></li>
          </ul>
        </div>

        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2017 Hair By Julie Lin
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
