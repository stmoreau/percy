import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Favorites extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        Favorites
        <Menu />
      </div>
    );
  }
}

export default Favorites;
