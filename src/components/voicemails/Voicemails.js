import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';
import FontAwesome from 'react-fontawesome';

class Voicemails extends Component {
  constructor(){
      super();
      this.state = {
        play1: 'play',
        play2: 'play'
      };
  }

  handleClick1() {
    (this.state.play1 === 'play') ? this.setState({play1: 'pause'}) : this.setState({play1: 'play'})
  }

  handleClick2() {
    (this.state.play2 === 'play') ? this.setState({play2: 'pause'}) : this.setState({play2: 'play'})
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
                      onClick={this.handleClick1.bind(this)}
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
                      className='heart'
                      name='heart'
                      size='2x'
                      style={{ color: 'red' }}
                      />
                  </td>
                </tr>
                <tr>
                  <td>
                    +447904801802
                  </td>
                  <td>
                    <FontAwesome
                      onClick={this.handleClick2.bind(this)}
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
                      className='heart'
                      name='heart'
                      size='2x'
                      style={{ color: 'black' }}
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
