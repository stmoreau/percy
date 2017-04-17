import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Settings extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            Settings content
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
