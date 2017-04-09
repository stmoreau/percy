import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Favorites extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            this is my content
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
