import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import MainCalendar from './Calendar/MainCalendar';

class Calendar extends Component {

  render() {
    console.log("CalendarComponents");
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="calendarComponents">
          <MainCalendar />
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Calendar;
