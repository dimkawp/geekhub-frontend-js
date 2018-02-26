import React, { Component } from 'react';
//config
import SalesChart from '../../../config/pieChart.config';

class SelectReport extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Last Yeat") {
            this.props.reportSendData(
                [
                    ["Websites",111],["Logo", 1],["Social Media",11],["Adwords", 11], ["E-Commerce", 1111]
                ]
            );
        }
        if (e.target.value === "Last Month") {
            this.props.reportSendData(
                [
                    ["Websites",222],["Logo", 2],["Social Media",222],["Adwords", 22], ["E-Commerce", 2222]
                ]
            );
        }
        if (e.target.value === "Last Week") {
            this.props.reportSendData(
                [
                    ["Websites",3],["Logo", 333],["Social Media",33],["Adwords", 3], ["E-Commerce", 333]
                ]
            );
        } 
    }
  render() {
    console.log("SelectReportComponents");
    return (
        <div>
        <span>Period: </span>
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

export default SelectReport;
