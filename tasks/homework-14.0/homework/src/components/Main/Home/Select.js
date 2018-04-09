import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Year") {
            console.log('1');
            this.props.SelectSendData(

                    [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            );
        }
        if (e.target.value === "Month") {
            console.log('2');
            this.props.SelectSendData(

                    [19.9, 71.5, 126.4, 129.2, 144.0, 176.0, 1135.6, 48.5, 216.4, 194.1, 5.6, 54.4]

            );
        }
        if (e.target.value === "Week") {
            console.log('3');
            this.props.SelectSendData(

                    [29.9, 71.5, 16.4, 129.2, 14.0, 176.0, 135.6, 1.5, 6.4, 1.1, 9.6, 54.4]

            );
        }
    }
    render() {
        console.log("SelectComponents");
        return (
            <div>
                <span>Show: </span>
                <select onChange={this.onChange}>
                    {
                        this.props.data.map((item, index) => {
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