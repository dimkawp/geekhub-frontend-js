import React, { Component } from 'react';
//config
import SalesChart from '../../../config/pieChart.config';

class Select extends Component {
    onChange = (e) => {
        this.props.sendData(100);
    }
  render() {
    console.log("SelectComponents");
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

export default Select;
