import React, { Component } from 'react';
import NavLink from './../menu/NavLink';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <div className="main-subtitle">Try Percy for Free</div>
        <NavLink to="/schedule"><button className="create-account">Create an account</button></NavLink>
        <p>Percy is a project made by <a target="_blank" href="https://www.linkedin.com/in/stefmoreau/">Stephane Moreau</a> - ©2017</p>
      </div>
    );
  }
}

export default Footer;
