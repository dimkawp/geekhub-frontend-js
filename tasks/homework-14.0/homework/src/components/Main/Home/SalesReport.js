import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
//config
import SalesChart from '../../../config/salesReportChart.config';
class SalesReport extends Component {

    render() {
        console.log("SalesReportComponents");
        return (
            <ReactHighcharts config = {SalesChart}></ReactHighcharts>
        );
    }
}

export default SalesReport;