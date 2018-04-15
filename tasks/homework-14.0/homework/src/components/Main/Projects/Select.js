import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Year") {
            console.log('1');
            this.props.SelectInboxData(

            );
        }
        if (e.target.value === "Month") {
            console.log('2');
            this.props.SelectInboxData(
            );
        }
        if (e.target.value === "Week") {
            console.log('3');
            this.props.SelectInboxData(

            );
        }
    }
    render() {
        console.log("SelectComponents");
        return (
            <div>
                <span>Show projects:: </span>
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