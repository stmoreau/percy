import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';
import './Settings.css';

class Settings extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            <form>
              <label htmlFor="message">What do you want people to hear when you are not contactable?</label>
              <input className="message" name="message" type="text" placeholder="I am busy right now, leave your message and I will call you later." />

              <label htmlFor="number">Do you want to change your phone number?</label>
              <input className="number" name="number" type="text" placeholder="+44 (0)207 123 4567" />

              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
