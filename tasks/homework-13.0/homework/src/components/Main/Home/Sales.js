import React, { Component } from 'react';
import salesImg from '../../../assets/img/home/sales.fw.png';
import Select from './Select';
import ReactHighcharts from 'react-highcharts';
//config
import SalesChart from '../../../config/pieChart.config';


class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldVal:                 
      [
        ["Websites",111],["Logo", 1],["Social Media",11],["Adwords", 11], ["E-Commerce", 1111]
      ],
      SalesTitleText: '',
      SalesSubTitle: ''
    }
  }
  getData = (val) => {
    this.setState({
      fieldVal: val
    })
  };
  render() {
    const SalesSelect = ["Last Yeat","Last Month", "Last Week"];
    console.log("SalesComponents");
    console.log(this.state.fieldVal);
    SalesChart.series[0].data = this.state.fieldVal;
 
    return (
        <div className="sales col-sm-12 col-md-12 col-lg-5">
          <div className="header">
            <h3>Your Sales</h3>
            <Select data={SalesSelect} salesSendData={this.getData}/>
          </div>
          <div className="result">
            <ReactHighcharts config = {SalesChart}></ReactHighcharts>
          </div>
        </div>
    );
  }
}

export default Sales;
