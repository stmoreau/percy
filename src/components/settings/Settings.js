import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Settings extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        Settings
        <Menu />
      </div>
    );
  }
}

export default Settings;
