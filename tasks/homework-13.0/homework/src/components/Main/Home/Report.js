import React, { Component } from 'react';
import reportImg from '../../../assets/img/home/report.fw.png';
import Select from './Select';

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
        <div className="graph">
          <img src={reportImg} alt="reportImg"/>
        </div>
      </div>
    </div>

    );
  }
}

export default Report;
