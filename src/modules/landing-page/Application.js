import React, { Component } from 'react';
import './Application.css';
import TopMenu from './TopMenu';
import Hero from './Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <div className="main-top">
          <Hero />
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
