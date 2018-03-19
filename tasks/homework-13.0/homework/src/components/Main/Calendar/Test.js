import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//semantic-ui
import { Dropdown, Modal, Button } from 'semantic-ui-react'

BigCalendar.momentLocalizer(moment); 
const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2018, 3, 0),
    end: new Date(2018, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2018, 3, 7),
    end: new Date(2018, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2018, 3, 9, 0, 0, 0),
    end: new Date(2018, 3, 9, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2018, 3, 18),
    end: new Date(2018, 3, 19),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2018, 3, 12, 10, 30, 0, 0),
    end: new Date(2018, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2018, 4, 18, 12, 0, 0, 0),
    end: new Date(2018, 4, 18, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2018, 3, 12, 14, 0, 0, 0),
    end: new Date(2018, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2018, 2, 18, 17, 0, 0, 0),
    end: new Date(2018, 2, 18, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2018, 3, 12, 20, 0, 0, 0),
    end: new Date(2018, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2018, 3, 13, 7, 0, 0),
    end: new Date(2018, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2018, 3, 17, 19, 30, 0),
    end: new Date(2018, 3, 18, 2, 0, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2018, 3, 20, 19, 30, 0),
    end: new Date(2018, 3, 22, 2, 0, 0),
  },
]
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Test extends Component {
  handleSelectEvent(event,target) {
    let obj = target.currentTarget;
    console.log(target.currentTarget.children);
    return (
      <div id="testModal">{event.title}</div>
    );

  }
  calendarDropdown = (
  <div></div>
  );

    render() {
        return (
          <div className="bigCalendar col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div>


            </div>
            <BigCalendar
              selectable
              events={events}
              defaultView="month"    
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(2018, 3, 19)}
              onSelectEvent={this.handleSelectEvent}
              onSelectSlot={slotInfo =>
                alert(
                  `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                )
              }
            />
          </div>
        );
    }
}

export default Test