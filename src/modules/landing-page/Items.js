import React, { Component } from 'react';

class Items extends Component {
  render() {
    return (
      <div>
        hello {this.props.type}
      </div>
    );
  }
}

export default Items;
