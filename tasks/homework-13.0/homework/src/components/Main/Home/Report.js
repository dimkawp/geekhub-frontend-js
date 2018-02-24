import React, { Component } from 'react';
import reportImg from '../../../assets/img/home/report.fw.png';
import Select from './Select';
import ReactHighcharts from 'react-highcharts';
//config
import ReportChart from '../../../config/splineChart.config';
class Report extends Component {

  render() {
    const ReportSelect = ["Last Yeat","Last Month", "Last Week"];
    console.log("ReportComponents");
    return (
    <div className="report col-sm-12 col-md-12 col-lg-6">
      <div className="header">
        <h3>Report</h3>
        <Select data={ReportSelect}/>
      </div>
      <div className="result">
        <ReactHighcharts config = {ReportChart}></ReactHighcharts>
      </div>
    </div>

    );
  }
}

export default Report;
