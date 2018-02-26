import React, { Component } from 'react';
import reportImg from '../../../assets/img/home/report.fw.png';
import Select from './Select';
import SelectReport from './SelectReport';
import ReactHighcharts from 'react-highcharts';
//config
import ReportChart from '../../../config/splineChart.config';
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportfieldVal: []
    }
  }
  ReportgetData = (val) => {
    this.setState({
      ReportfieldVal: val
    })
  };

  render() {
    const ReportSelect = ["Last Yeat","Last Month", "Last Week"];
    console.log("ReportComponents");
    console.log(this.state.ReportfieldVal);
    if (!this.state.ReportfieldVal) {
      ReportChart.series[0].data = 0;
    }
    else {
      ReportChart.series[0].data = this.state.ReportfieldVal;
    }
    return (
    <div className="report col-sm-12 col-md-12 col-lg-6">
      <div className="header">
        <h3>Report</h3>
        <SelectReport data={ReportSelect} reportSendData={this.ReportgetData}/>
      </div>
      <div className="result">
        <ReactHighcharts config = {ReportChart}></ReactHighcharts>
      </div>
    </div>

    );
  }
}

export default Report;
