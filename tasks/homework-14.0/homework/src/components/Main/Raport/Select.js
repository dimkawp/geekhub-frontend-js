import React, { Component } from 'react';
import './Select.css';

class SelectProject extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Array1") {
            this.props.sendSelectData(
                [1040, 11233, 22224, 27342, 2662, 12956, 6912]
            );
        }
        if (e.target.value === "Array2") {
            this.props.sendSelectData(
                [40, 1233, 22224, 27342, 26662, 12956, 6912]
            );
        }
    }
    render() {
        console.log("SelectComponents");
        return (
            <div className="RaportSelect">
                <span>Raport: </span>
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