import React, { Component } from 'react';
import NavLink from './../menu/NavLink';

class TopMenu extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">Percy</div>
        <NavLink to="/schedule" className="sign-in-link">Sign in</NavLink>
      </nav>
    );
  }
}

export default TopMenu;
