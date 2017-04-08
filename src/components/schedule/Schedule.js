import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';

class Schedule extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        Schedule
        <Menu />
      </div>
    );
  }
}

export default Schedule;
