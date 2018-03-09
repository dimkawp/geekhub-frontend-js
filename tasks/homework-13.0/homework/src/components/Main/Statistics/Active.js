import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import ActiveSelect from '../Statistics/ActiveSelect';
//config
import ReportChart from '../../../config/splineChart.config';

class Active extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ActivefieldVal: 
            [
                ["Websites",222],["Logo", 2],["Social Media",222],["Adwords", 22], ["E-Commerce", 2222]
            ]
        }
        }
        ActiveGetData = (val) => {
        this.setState({
            ActivefieldVal: val
        })
    };

  render() {
    console.log("ActiveComponents");
    const ActiveSelectData = ["Last Yeat","Last Month", "Last Week"];
    const ActiveSelectDataTo = ["Notifications","Modification"];
    ReportChart.series[0].data = this.state.ActivefieldVal;
    return (
        <div className="active">
            <div className="header">
                <h3>Lorem Ipsum Stats</h3>
                <div className="selectBlock">
                    <ActiveSelect data={ActiveSelectData} activeSendData={this.ActiveGetData}/>
                    <ActiveSelect data={ActiveSelectDataTo} activeSendData={this.ActiveGetData}/>
                </div>             
            </div>
            <div className="result col-xs-12 col-sm-12 col-lg-12">
                <div className="resultBlock col-xs-12 col-sm-12 col-lg-5">
                    <div className="sale">
                        <div className="title">1,560</div>
                        <p>Sales</p>
                    </div>
                    <div className="views">
                        <div className="title">3,230</div>
                        <p>Views</p>
                    </div>
                </div>
                <div className="activeChart col-xs-12 col-sm-12 col-lg-7">
                    <ReactHighcharts config = {ReportChart}></ReactHighcharts>
                </div>
            </div>
        </div>
    );
  }
}

export default Active;
