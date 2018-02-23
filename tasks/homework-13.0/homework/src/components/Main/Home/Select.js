import React, { Component } from 'react';


class Select extends Component {
    onChange = (e) => {
        console.log(e.target.value);
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
