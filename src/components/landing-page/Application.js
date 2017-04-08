import React, { Component } from 'react';
import './Application.css';
import TopMenu from './TopMenu';
import Hero from './Hero';
import Item from './Item';
import Footer from './../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <Hero />
        <hr />
        <Item type="calendar"/>
        <Item type="call"/>
        <Item type="mobile"/>
        <Footer />
      </div>
    );
  }
}

export default App;
