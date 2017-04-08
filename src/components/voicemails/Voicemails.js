import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Voicemails extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        Voicemails
        <Menu />
      </div>
    );
  }
}

export default Voicemails;
