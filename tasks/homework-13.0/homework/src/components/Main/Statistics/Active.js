import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Select from '../Home/Select';
//config
import ReportChart from '../../../config/splineChart.config';

class Active extends Component {

  render() {
    console.log("ActiveComponents");
    const ReportSelect = ["Last Yeat","Last Month", "Last Week"];
    return (
        <div className="active">
            <div className="header">
                <h3>Lorem Ipsum Stats</h3>
                <Select data={ReportSelect}/>
            </div>
            <div className="result">
                <div className="sales"></div>
                <div className="views"></div>
            </div>
            <div className="activeChart">
                <ReactHighcharts config = {ReportChart}></ReactHighcharts>
            </div>
        </div>
    );
  }
}

export default Active;
