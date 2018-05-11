import React, { Component } from 'react';
//config
class Select extends Component {

    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        if (e.target.value === "All") {
            console.log('All');
            this.props.selectData('All');
        }
        if (e.target.value === "Symu.co") {
            console.log('Symu.co');
            this.props.selectData('Symu.co');
        }
        if (e.target.value === "Google") {
            console.log('Google');
            this.props.selectData('Google');
        }

    }

    render() {
        console.log("SelectComponents");
        return (
            <div>
                <span>Period: </span>
                <select onChange={this.onChange}>
                    {
                        this.props.option.map((item, index) => {
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
