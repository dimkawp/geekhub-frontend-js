import React, { Component } from 'react';
import './Select.css';

class SelectProject extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Year") {
            console.log('campaing 1');
            this.props.SelectProjectSendData(11);
        }
        if (e.target.value === "Month") {
            console.log('status 2');
            this.props.SelectProjectSendData(22);
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
export default SelectProject;