import React, { Component } from 'react';
import './Projects.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
//table
import BootstrapTable from 'react-bootstrap-table-next';


function rankFormatter(cell, row, rowIndex) {
    return (
        <div className="testRow">
            <div className="testRowBody">
                 {cell}
            </div>
            <div className="testRowButton">

            </div>
        </div>
    );
}

const columns = [{
    dataField: 'id',
    text: 'Product ID',
    formatter: rankFormatter
}, {
    dataField: 'title',
    text: 'Project title',
    formatter: rankFormatter
}, {
    dataField: 'value',
    text: 'Value',
    formatter: rankFormatter
}, {
    dataField: 'deadlineData',
    text: 'Deadline',
    formatter: rankFormatter
}, {
    dataField: 'timeSpent',
    text: 'Time Spent',
    formatter: rankFormatter
}, {
    dataField: 'progress',
    text: 'Progress',
    formatter: rankFormatter
}, {
    dataField: 'status',
    text: 'Status',
    formatter: rankFormatter
}, {
    dataField: 'assigned',
    text: 'Assigned to',
    formatter: rankFormatter
}, {
    dataField: 'dropbox',
    text: ' ',
    formatter: rankFormatter
}];

const products = [{
    id: 1,
    title: 'title 1',
    value: '20011',
    deadlineData: '15 May 2016',
    timeSpent: '40 hours',
    progress: 20,
    status: 'Development',
    assigned: 'Dominic Lynton'

}, {
    id: 2,
    title: 'title 2',
    value: '20011',
    deadlineData: '15 May 2016',
    timeSpent: '40 hours',
    progress: 20,
    status: 'Development',
    assigned: 'Dominic Lynton'
}, {
    id: 3,
    title: 'title 2',
    value: '20011',
    deadlineData: '15 May 2016',
    timeSpent: '40 hours',
    progress: 20,
    status: 'Development',
    assigned: 'Dominic Lynton'
}];

class Projects extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("ProjectsComponents");
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="projects">
                        <div className="projectsHeader">
                            <div className="title">
                                <h3>All Projects (358) <span>Workflow</span></h3>
                            </div>
                            <div className="select">
                                <span>Show projects:</span>
                                <select name="" id="">
                                    <option value="">value 1</option>
                                    <option value="">value 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="projectsBlock">
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

export default Projects;
