import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "All") {
            this.props.SelectInboxData(
                'All'
            );
        }
        if (e.target.value === "YourMessage") {
            this.props.SelectInboxData(
                'YourMessage'
            );
        }
        if (e.target.value === "YouMessage") {
            this.props.SelectInboxData(
                'YouMessage'
            );
        }
    }
    render() {
        console.log("SelectComponents");
        return (
            <div className="selectBlock">
                <span>Filter messages: </span>
                <select onChange={this.onChange}>
                    {
                        this.props.value.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })
                    }
                </select>
            </div>
        );
    }

}
export default Select;