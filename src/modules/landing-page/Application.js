import React, { Component } from 'react';
import logo from './logo.svg';
import './Application.css';
import NavLink from './../menu/NavLink';

class App extends Component {

  handleClick(){
    alert('yo');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavLink to="/schedule">Sign in</NavLink>
        </div>
        <h1>Your personal assistant.</h1>
      </div>
    );
  }
}

export default App;
