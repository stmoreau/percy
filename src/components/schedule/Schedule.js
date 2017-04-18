import React, { Component } from 'react';
import Menu from './../menu/Menu';
import TopMenu from './../landing-page/TopMenu.js';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from './events';
import './Schedule.css'

class Schedule extends Component {
  render() {

    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );

    return (
      <div className="test">
        <TopMenu loggedIn={true}/>
        <div className="body-container">
          <Menu />
          <div className="body-content">
            <h4>Add your meetings / busy times on this calendar.</h4>
            <BigCalendar
              events={events}
              defaultView='day'
              startAccessor='startDate'
              endAccessor='endDate'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
