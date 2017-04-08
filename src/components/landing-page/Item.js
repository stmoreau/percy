import React, { Component } from 'react';
import CallIcon from './../../icons/call.png';
import MobileIcon from './../../icons/mobile.png';
import CalendarIcon from './../../icons/calendar.png';
import './Item.css';

class Item extends Component {

  calendar = {image : CalendarIcon, header:"Mark which hours you are busy", text:"During this time your phone will not ring and you’ll be able to be concentrated and finish your work on time without anyone disturbing you."};
  call = {image : MobileIcon, header:"What happens if someone tries to call you?", text:"In this case with this application you’ll be able to set a default message that the caller will hear and also will be given the opportunity to leave a voicemail."};
  mobile = {image : CallIcon, header:"Find out what messages people have left.", text:"On an incoming voicemail you will automatically receive a message (SMS) on your phone with the exact message the person left. Or you can disable this feature and hear/download the voicemail from Percy’s dashboard."};


  itemPicker(){
    if (this.props.type === "calendar"){
      return this.calendar
    } else if (this.props.type === "mobile"){
      return this.mobile
    } else {
      return this.call
    }
  }

  render() {
    return (
      <div className='container'>
        <img className='item-image'
          alt={this.props.type}
          src={this.itemPicker().image} />
          <h2>{this.itemPicker().header}</h2>
          <hr />
          <p>{this.itemPicker().text}</p>
      </div>
    );
  }
}

export default Item;
