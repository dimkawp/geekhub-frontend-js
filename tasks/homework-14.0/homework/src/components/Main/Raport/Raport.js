import React, { Component } from 'react';
import './Raport.css'
import ReactHighcharts from 'react-highcharts';
//config
import RaportChart from '../../../config/raportChart.config';
//table
import BootstrapTable from 'react-bootstrap-table-next';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import SalesChart from "../../../config/salesReportChart.config";

function rankFormatter(cell, row, rowIndex) {
    return (
        <div className="testRow">

        </div>
    );
}

const columns = [ {
    dataField: 'campaing',
    text: 'Campaing',
    sort: true
}, {
    dataField: 'time',
    text: 'Time',
    sort: true
}, {
    dataField: 'views',
    text: 'Views',
    sort: true
}, {
    dataField: 'visitor',
    text: 'Visitor',
    sort: true
}, {
    dataField: 'ctr',
    text: 'ctr',
    sort: true
}, {
    dataField: 'cps',
    text: 'cps',
    sort: true
}, {
    dataField: 'cpv',
    text: 'cpv',
    sort: true
}, {
    dataField: 'cpm',
    text: 'cpm',
    sort: true
}, {
    dataField: 'status',
    text: 'status',
    sort: true
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

class Raport extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
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
