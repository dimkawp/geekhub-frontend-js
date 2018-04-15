import React, { Component } from 'react';
import './Raport.css'
import ReactHighcharts from 'react-highcharts';
//config
import RaportChart from '../../../config/raportChart.config';
//table
import BootstrapTable from 'react-bootstrap-table-next';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from '../Menu/SideMenu';
import RaptorChartHeader from './RaptorChartHeader';
import $ from "jquery";

const headerSortingClasses = (column, sortOrder, isLastSorting, colIndex) => (
    sortOrder === 'asc' ? 'sorting-asc' : 'sorting-desc'
);
const columns = [ {
    dataField: 'campaing',
    text: 'Campaing',
    formatter: campaingFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'time',
    text: 'Time',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'views',
    text: 'Views',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'visitor',
    text: 'Visitor',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'ctr',
    text: 'ctr',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'cps',
    text: 'cps',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'cpv',
    text: 'cpv',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'cpm',
    text: 'cpm',
    formatter: otherFormatter,
    sort: true,
    headerSortingClasses
}, {
    dataField: 'status',
    text: 'status',
    formatter: statusFormatter,
    sort: true,
    headerSortingClasses
}];

const products = [{
    id: 1,
    campaing: 'Lorem ipsum dolor sit amet tetur adipisicing elit sed do eiusmod',
    time: '6 day',
    views: 31000,
    visitor: 333,
    progress: 20,
    ctr: 25,
    cps: 3.02,
    cpv: 4.5,
    cpm: 11.4,
    status: 'active'

}, {
    id: 2,
    campaing: 'Lorem ipsum dolor sit amet tetur adipisicing elit sed do eiusmod',
    time: '6 day',
    views: 31000,
    visitor: 333,
    progress: 20,
    ctr: 25,
    cps: 3.02,
    cpv: 14.5,
    cpm: 121.4,
    status: 'active'
}, {
    id: 3,
    campaing: 'Lorem ipsum dolor sit amet tetur adipisicing elit sed do eiusmod',
    time: '6 day',
    views: 1000,
    visitor: 333,
    progress: 20,
    ctr: 25,
    cps: 31.02,
    cpv: 4.5,
    cpm: 11.4,
    status: 'disable'
}];
function campaingFormatter(cell, row, rowIndex) {
    return (
        <div className="mainRow">
            <div className="mainRowBody">
                {cell}
            </div>
        </div>
    );
}
function otherFormatter(cell, row, rowIndex) {
    return (
        <div className="mainRowOther">
            <div className="otherRowBody">
                {cell}
            </div>
        </div>
    );
}
function statusFormatter(cell, row, rowIndex) {
    return (
        <div className="mainRowOther">
            <div className="otherRowBody">
                <div className="status">
                    {
                        cell == 'active' &&
                        <div className="statusActive"></div>
                    }
                    {
                        cell == 'disable' &&
                        <div className="statusDisable"></div>
                    }
                </div>{cell}
            </div>
        </div>
    );
}

class Raport extends Component {
    //JQ
    componentDidMount() {
        $(document).ready(function() {
            $(".highcharts-credits, .highcharts-legend, .highcharts-yaxis-labels").hide();
        });
    }


    render() {
        console.log("RaportComponents");
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="raport">
                        <div className="raportChart">
                            <RaptorChartHeader/>
                            <ReactHighcharts config = {RaportChart}></ReactHighcharts>
                        </div>
                        <div className="raportTable">
                            <BootstrapTable keyField='id'
                                            classes="testTable"
                                            data={ products }
                                            columns={ columns }
                                            bordered={ false }
                            />
                        </div>
                    </section>
                </section>
            </div>

        );
    }
}

export default Raport;
