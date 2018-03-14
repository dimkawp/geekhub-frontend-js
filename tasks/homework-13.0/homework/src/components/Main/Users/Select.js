import React, { Component } from 'react';
//config


class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Last Yeat") {
            this.props.UserTableSendData(
                [
                    
                ]
            );
        }
        if (e.target.value === "Last Month") {
            this.props.UserTableSendData(
                [
                    
                ]
            );
        }
        if (e.target.value === "Last Week") {
            this.props.UserTableSendData(
                [
                    
                ]
            );
        } 
    }
  render() {
    console.log("SelectComponents");
    return (
        <div>
        <span>Sort: </span>
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
