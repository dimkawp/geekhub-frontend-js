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
                <div className="selectBlock">
                    <Select data={ReportSelect}/>
                    <Select data={ReportSelect}/>
                </div>             
            </div>
            <div className="result col-sm-12 col-lg-12">
                <div className="resultBlock col-sm-12 col-lg-5">
                    <div className="sale">
                        <div className="title">1,560</div>
                        <p>Sales</p>
                    </div>
                    <div className="views">
                        <div className="title">3,230</div>
                        <p>Views</p>
                    </div>
                </div>
                <div className="activeChart col-sm-12 col-lg-7">
                    <ReactHighcharts config = {ReportChart}></ReactHighcharts>
                </div>
            </div>
        </div>
    );
  }
}

export default Active;
