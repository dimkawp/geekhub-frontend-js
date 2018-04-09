import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './SalesReport.css';
//config
import SalesChart from '../../../config/salesReportChart.config';
import Select from "./Select";
class SalesReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldVal:
                [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }
    }
    SelectSendData = (val) => {
        this.setState({
            fieldVal: val
        })
    }

    render() {
        const SelectReportData = ["Year","Month", "Week"];
        SalesChart.series[0].data = this.state.fieldVal;
        console.log("SalesReportComponents");
        return (
            <div className="salesReportBlock">
                <div className="header">
                    <div className="title">Sales Report</div>
                    <div className="select">
                        <Select data={SelectReportData} SelectSendData={this.SelectSendData}/>
                    </div>
                </div>
                <ReactHighcharts config = {SalesChart}></ReactHighcharts>
            </div>

        );
    }
}

export default SalesReport;