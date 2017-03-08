import React, { Component } from 'react';
import logo from './logo.svg';
import './Application.css';
import NavLink from './NavLink';

class App extends Component {

  handleClick(){
    alert('yo');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
          <NavLink to="/schedule">Schedule</NavLink>
        </div>
      </div>
    );
  }
}

export default App;
