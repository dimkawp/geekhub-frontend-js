import React, { Component } from 'react';
import salesImg from '../../../assets/img/home/sales.fw.png';
import Select from './Select';
import ReactHighcharts from 'react-highcharts';
//config
import SalesChart from '../../../config/pieChart.config';


class Sales extends Component {
  constructor(props) {
    super(props);
  }
  getData = (val) => {
    console.log(val);
  };
  render() {
    const SalesSelect = ["Last Yeat","Last Month", "Last Week"];
    console.log("SalesComponents");
    SalesChart.series[0].data[0][1] = 30;
    return (
        <div className="sales col-sm-12 col-md-12 col-lg-5">
          <div className="header">
            <h3>Your Sales</h3>
            <Select data={SalesSelect} sendData={this.getData}/>
          </div>
          <div className="result">
            <ReactHighcharts config = {SalesChart}></ReactHighcharts>
          </div>
        </div>
    );
  }
}

export default Sales;
