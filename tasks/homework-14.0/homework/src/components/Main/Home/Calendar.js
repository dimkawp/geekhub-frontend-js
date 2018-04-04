import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    onChange = date => this.setState({ date })

    render() {
        console.log("CalendarComponents");
        return (

            <ReactCalendar
                className="reactCustomCalendar"
                locale="en-EN"
                onChange={this.onChange}
                value={this.state.date}
            />

        );
    }
}

export default Calendar;