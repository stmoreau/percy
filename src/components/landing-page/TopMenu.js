import React, { Component } from 'react';
import NavLink from './../menu/NavLink';
import FontAwesome from 'react-fontawesome';

class TopMenu extends Component {

  render() {
    return (
      <nav className="navbar">
        <div className="logo">Percy</div>
        {this.props.loggedIn ? (
          <span className="wrapper">
            <FontAwesome
              className='search'
              name='search'
              size='2x'
            />
          <input placeholder='Search' type='text' />

            <span className="signed-in-text">Your number: 07904801802</span>
          </span>
        ) : (
          <h2>
            <NavLink to="/schedule" className="sign-in-link">Sign in</NavLink>
          </h2>
        )}
      </nav>
    );
  }
}

export default TopMenu;
