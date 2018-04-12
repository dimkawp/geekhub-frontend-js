import React, { Component } from 'react';
//config
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quened: this.props.value
        }
    }
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "All") {

            console.log('All');
            this.props.selectData(
                ['All']
            );
        }
        if (e.target.value === "Symu.co") {
            var array1 = this.props.value;
            var indices = [];
            var element = 'Symu.co';
            var map3 = array1.map(x => x.split('/')[1].replace(/\s*/g,''));
            var idx = map3.indexOf(element);
            while (idx != -1) {
                indices.push(idx);
                idx = map3.indexOf(element, idx + 1);
            }
            //this.props.QuenedArray.splice(0,1);
            //this.props.QuenedArray.splice(2,1);
            // return indices.includes(key);
            const result = this.props.value.filter(item => item.includes('Symu.co'));
            console.log('result in SELECT',result);
            console.log('Quened',this.props.value);
            this.setState({
                Quened: result
            });
            this.props.selectData(
                result
            );
        }
        if (e.target.value === "Google") {
            console.log('Google');
            this.props.selectData(
                ['Google']
            );
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
