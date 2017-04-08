import React, { Component } from 'react';
import CallIcon from './../../icons/call.png';
import MobileIcon from './../../icons/mobile.png';
import CalendarIcon from './../../icons/calendar.png';

class Items extends Component {

  imagePicker(){
    if (this.props.type === "calendar"){
      return CalendarIcon
    } else if (this.props.type === "mobile"){
      return MobileIcon
    } else {
      return CallIcon
    }
  }

  render() {
    return (
      <div>
        <img
          alt={this.props.type}
          src={this.imagePicker()} />
        {this.props.type}
      </div>
    );
  }
}

export default Items;
