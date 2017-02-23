import React, { Component } from 'react';
import logo from './wwf-logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <img src={logo} className="Header-logo" />
      </div>

    );
  }
}

export default Header;
