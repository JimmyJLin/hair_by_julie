import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Mailto from 'react-mailto';

import './_footer.scss'

class Footer extends Component {

  handleFloatToggle(){

    if($('.fixed-action-btn').hasClass('active')) {
      setTimeout(() => {
        $('.fixed-action-btn').closeFAB();
        $('.fixed-action-btn').removeClass('active');
      }, 3000);
    } else {
      console.log('no active class')
      $('.fixed-action-btn').openFAB();

    }
  }

  render() {
    return (
      <footer id="footer" className="page-footer">

        <div
          onClick={this.handleFloatToggle}
          className="fixed-action-btn vertical">
          <Link to={'#'} className="btn-floating btn-large red">
            <i className="large material-icons">menu</i>
          </Link>
          <ul>
            <li><Link to={'tel:917-386-5485'} target='_blank' className="btn-floating green"><i className="material-icons">local_phone</i></Link></li>
            <li><Mailto email="julieslin@gmail.com" className="btn-floating red"><i className="material-icons">email</i></Mailto></li>
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
