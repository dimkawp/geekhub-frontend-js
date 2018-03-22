import React, { Component } from 'react';
//config
class Select extends Component {
    TestOnClick = () => {
        console.log('click selected');
    }
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Sort Name") {
            this.props.UserTableSendData(
                {sort: 'name'}        
            );
        }
        if (e.target.value === "Sort Status") {
            this.props.UserTableSendData(
                {sort: 'status'}     
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
