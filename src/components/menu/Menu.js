import React, { Component } from 'react';
import NavLink from './NavLink';
import FontAwesome from 'react-fontawesome';
import './Menu.css'

class Menu extends Component {

  render() {
    return (
      <div className="left-menu">
        <ul>
          <li>
            <NavLink to="/schedule" onlyActiveOnIndex>
              <FontAwesome
                className='calendar'
                name='calendar'
                />
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink to="/voicemails">
              <FontAwesome
                className='envelope-o'
                name='envelope-o'
                />
              Voicemails
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              <FontAwesome
                className='heart-o'
                name='heart-o'
                />
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <FontAwesome
                className='cog'
                name='cog'
                />
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FontAwesome
                className='sign-out'
                name='sign-out'
                />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
