import React, { Component } from 'react';
import './HomeChart.css';
import ReactHighcharts from 'react-highcharts';
//config
import ReportChart from '../../../config/homeReportChart.config';

class HomeChart extends Component {

    render() {
        console.log("HomeChartComponents");
        return (
            <ReactHighcharts config = {ReportChart}></ReactHighcharts>
        );
    }
}

export default HomeChart;