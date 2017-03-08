import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick(){
    alert('yo');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={() => this.handleClick()} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={() => this.handleClick()}>Hello Button</Button>
      </div>
    );
  }
}

export default App;
