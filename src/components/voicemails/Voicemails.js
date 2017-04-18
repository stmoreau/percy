import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';
import FontAwesome from 'react-fontawesome';

class Voicemails extends Component {
  constructor(){
      super();
      this.state = {
        play1: 'play',
        play2: 'play',
        color1: 'red',
        color2: 'black'
      };
  }

  handleClickPlay1() {
    (this.state.play1 === 'play') ? this.setState({play1: 'pause'}) : this.setState({play1: 'play'})
  }

  handleClickPlay2() {
    (this.state.play2 === 'play') ? this.setState({play2: 'pause'}) : this.setState({play2: 'play'})
  }

  handleClickHeart1() {
    (this.state.color1 === 'red') ? this.setState({color1: 'black'}) : this.setState({color1: 'red'})
  }

  handleClickHeart2() {
    (this.state.color2 === 'red') ? this.setState({color2: 'black'}) : this.setState({color2: 'red'})
  }

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            <h4>Received Voicemails</h4>
            <table>
              <tbody>
                <tr>
                  <td>
                    From
                  </td>
                  <td>
                    Play
                  </td>
                  <td>
                    Text
                  </td>
                  <td>
                    Downloads
                  </td>
                  <td>
                    Favorites
                  </td>
                </tr>
                <tr>
                  <td>
                    +447904801802
                  </td>
                  <td>
                    <FontAwesome
                      onClick={this.handleClickPlay1.bind(this)}
                      className={this.state.play1}
                      name={this.state.play1}
                      size='2x'
                      />
                  </td>
                  <td>
                    Dinner is ready! Where are you?
                  </td>
                  <td>
                    <FontAwesome
                      className='download'
                      name='download'
                      size='2x'
                      />
                  </td>
                  <td>
                    <FontAwesome
                      onClick={this.handleClickHeart1.bind(this)}
                      className='heart'
                      name='heart'
                      size='2x'
                      style={{ color: this.state.color1 }}
                      />
                  </td>
                </tr>
                <tr>
                  <td>
                    +447904801802
                  </td>
                  <td>
                    <FontAwesome
                      onClick={this.handleClickPlay2.bind(this)}
                      className={this.state.play2}
                      name={this.state.play2}
                      size='2x'
                      />
                  </td>
                  <td>
                    Hey ring me when you are available please. See you!
                  </td>
                  <td>
                    <FontAwesome
                      className='download'
                      name='download'
                      size='2x'
                      />
                  </td>
                  <td>
                    <FontAwesome
                      onClick={this.handleClickHeart2.bind(this)}
                      className='heart'
                      name='heart'
                      size='2x'
                      style={{ color: this.state.color2 }}
                      />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Voicemails;
