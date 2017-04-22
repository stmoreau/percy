import React, { Component } from 'react';
import './Application.css';
import TopMenu from './TopMenu';
import Hero from './Hero';
import Item from './Item';
import Footer from './../footer/Footer';

class App extends Component {
  constructor(){
      super();
      this.state = {
        width: window.innerWidth
      };
  }
  render() {
    return (
      <div>
        {this.state.width < 1000 ? (
          <h2>
            This web app is not responsive.. Please use a computer to have a tour!
          </h2>
        ) : (
          <div className="App">
            <TopMenu loggedIn={false}/>
            <Hero />
            <hr />
            <Item type="calendar"/>
            <Item type="call"/>
            <Item type="mobile"/>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
