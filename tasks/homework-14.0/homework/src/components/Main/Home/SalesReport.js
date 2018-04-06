import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './SalesReport.css';
//config
import SalesChart from '../../../config/salesReportChart.config';
class SalesReport extends Component {

    render() {
        console.log("SalesReportComponents");
        return (
            <div className="salesReportBlock">
                <div className="header">
                    <div className="title">Sales Report</div>
                    <div className="select">
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <ReactHighcharts config = {SalesChart}></ReactHighcharts>
            </div>

        );
    }
}

export default SalesReport;