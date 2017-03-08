import React, { Component } from 'react';
import NavLink from './NavLink';

class Menu extends Component {

  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/schedule" onlyActiveOnIndex>Schedule</NavLink></li>
          <li><NavLink to="/voicemails">Voicemails</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
