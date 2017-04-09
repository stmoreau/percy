import React, { Component } from 'react';
import NavLink from './../menu/NavLink';
import landingIcon from './../../icons/landing-icon.png';

class Hero extends Component {
  render() {
    return (
      <div className="container">
        <img src={landingIcon} alt="landing-icon"/>
        <div className="main-subtitle">Your personal assistant.</div>
        <NavLink to="/schedule"><button className="create-account">Create two accounts</button></NavLink>
      </div>
    );
  }
}

export default Hero;
