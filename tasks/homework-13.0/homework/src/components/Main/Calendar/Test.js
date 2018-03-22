import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
//semantic-ui
import { Dropdown, Modal, Button, ButtonGroup } from 'semantic-ui-react'

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
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      user: [
        {name: 'Nicky Hunt'},
        {work: 'Product Designer'}
      ]
    }
  }
  
  handleSelectEvent(event) {
    let obj = event;
    this.state.event = obj.title;
    this.setState({
      event: obj
    })
  }
  closeModel = () => {
    this.setState({
      event: []
    })
  }
    render() {
        return (
          <div className="bigCalendar col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {
              this.state.event > [] &&
            <div id="testModal">
            <button className="close" onClick={this.closeModel}>X</button>
              <div className="header">
                <span>AUTHOR:</span>
                <div className="author">
                <div className="avatarImg"></div>
                <div>
                  <span className="name">{this.state.user[0].name}</span>
                  <span className="work">{this.state.user[1].work}</span>
                </div>
                </div>
              </div>
              <div className="content">
                <div className="contentBlock">
                  <div className="block">
                    <span>TITLE: </span>
                    <p>{this.state.event.title}</p>
                  </div>
                  <div className="block">
                    <span>START: </span>
                    <p>{this.state.event.start.toLocaleString()}</p>
                  </div>
                  <div className="block">
                    <span>END: </span>
                    <p>{this.state.event.end.toString().slice(0,15)}</p>
                  </div>
                </div>          
              </div>  
              <div className="buttonBlock"><button>Edit Event</button></div>  
            </div>      
            }            
            <BigCalendar
              selectable
              events={events}
              defaultView="month"   
              views={['month','week','work_week','day']}
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={new Date(2018, 3, 19)}
              onSelectEvent={(event) => this.handleSelectEvent(event)}
              onSelectSlot={(event) => this.handleSelectEvent(event)}
            />
          </div>
        );
    }
}

export default Test