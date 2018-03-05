import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import ReactHighchartsMore from 'highcharts-more';
//config
import SolidChart from '../../../config/solidGauge.config';

class TotalSales extends Component {
  componentDidMount() {
    const $ = window.$;
  }

  render() {
    console.log("TotalSalesComponents");
    return (
        <div className="totalSales">
          <div className="items">
          <div className="item col-sm-12 col-lg-3">
          <ReactHighcharts config = {SolidChart}></ReactHighcharts>
          </div>
          <div className="item col-sm-12 col-lg-3">
          <ReactHighcharts config = {SolidChart}></ReactHighcharts>
          </div>
          <div className="item col-sm-12 col-lg-3">
          <ReactHighcharts config = {SolidChart}></ReactHighcharts>
          </div>

          </div>
        </div>
    );
  }
}

export default TotalSales;
