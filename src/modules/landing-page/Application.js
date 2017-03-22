import React, { Component } from 'react';
import './Application.css';
import TopMenu from './TopMenu';
import Hero from './Hero';
import Items from './Items';
import Footer from './../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Hero />
        <hr />
        <Items type="calendar"/>
        <Items type="call"/>
        <Items type="mobile"/>
        <Footer />
      </div>
    );
  }
}

export default App;
