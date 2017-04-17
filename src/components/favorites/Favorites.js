import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';
import FontAwesome from 'react-fontawesome';

class Favorites extends Component {

  render() {
    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            <h4>Your Favorites Voicemails</h4>
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
                      className='play'
                      name='play'
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
