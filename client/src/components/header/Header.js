import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './_header.scss'

class Header extends Component {
  render() {
    return (
      <div id="header" className="container-fluid">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>React-Bootstrap</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={'/'}>
                <NavItem eventKey={1} href="#">Link</NavItem>
              </LinkContainer>
              <LinkContainer to={'/'}>
                <NavItem eventKey={2} href="#">Link</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">

                <LinkContainer to={'/'}>
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/'}>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                </LinkContainer>
                <LinkContainer to={'/'}>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                </LinkContainer>

                <MenuItem divider />

                <LinkContainer to={'/'}>
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </LinkContainer>

              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={'/'}>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
              </LinkContainer>

              <LinkContainer to={'/'}>
                <NavItem eventKey={2} href="#">Link Right</NavItem>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
