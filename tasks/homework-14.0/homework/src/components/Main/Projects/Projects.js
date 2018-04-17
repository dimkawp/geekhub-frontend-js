import React, { Component } from 'react';
import './Projects.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from '../Menu/SideMenu';
import SelectProject from './SelectProject';
//table
import BootstrapTable from 'react-bootstrap-table-next';
import { Progress, Dropdown, Button } from 'semantic-ui-react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortform: true

        }
    }

    rankFormatter(cell, row, rowIndex) {
        return (
            <div className="mainRow">
                <div className="mainRowBody">
                    {cell}
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }
    titleFormatter(cell, row) {
        return (
            <div className="mainRow">
                <div className="mainRowBody">
                    <div className="titleRow">
                        {cell.name} <br/> <span>{cell.company}</span>
                    </div>
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }
    deadlineFormatter(cell, row) {
        return (
            <div className="mainRow">
                <div className="mainRowBody">
                    <div className="titleRow">
                        {cell} <br/> <span>10 days left</span>
                    </div>
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }
    progressFormatter(cell, row) {
        return (
            <div className="mainRow">
                <div className="mainRowBodyProgress">
                    <span>{cell}%</span>
                    <div className="progress">
                        { cell == 0 &&
                        <div></div>
                        }
                        { cell > 0 && cell < 100 &&
                        <Progress percent={cell} color='blue' />
                        }
                        { cell == 100 &&
                        <Progress percent={cell} color='green' />
                        }
                    </div>
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }
    AssignedFormatter(cell, row) {
        return (
            <div className="mainRow">
                <div className="mainRowBody">
                    <div className="assignedBlock">
                        <img src={cell.avatarUrl} alt=""/>
                        <div className="userBlock">
                            {cell.name}
                            <span>{cell.role}</span>
                        </div>

                    </div>
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }
    dropDownFormatter(cell, row) {
        return (
            <div className="mainRow">
                <div className="mainRowBody">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button>1</Button>
                            <Button>2</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="mainRowButton">

                </div>
            </div>
        );
    }

    onChangeTest(a, b, order) {   // order is desc or asc
        if (order === 'desc') {
            return a - b;
        } else {
            return b - a;
        }
    }

    render() {
        console.log("ProjectsComponents");

        const SelectProjectData = ["Campaing","Status"];
        const columns = [
            {
                dataField: 'title',
                text: 'Project title',
                formatter: this.titleFormatter,
                sort: true
            }, {
                dataField: 'value',
                text: 'Value',
                formatter: this.rankFormatter
            }, {
                dataField: 'deadlineData',
                text: 'Deadline',
                formatter: this.deadlineFormatter
            }, {
                dataField: 'timeSpent',
                text: 'Time Spent',
                formatter: this.rankFormatter
            }, {
                dataField: 'progress',
                text: 'Progress',
                formatter: this.progressFormatter,
                sort: true,
                sortFunc: this.onChangeTest
            }, {
                dataField: 'status',
                text: 'Status',
                formatter: this.rankFormatter
            }, {
                dataField: 'assigned',
                text: 'Assigned to',
                formatter: this.AssignedFormatter
            }, {
                dataField: 'id',
                text: ' ',
                formatter: this.dropDownFormatter
            }];
        const products = [{
            id: 1,
            title: {name: 'New website 1',company: 'Google 1'},
            company: 'Microsoft',
            value: '20011',
            deadlineData: '15 May 2016',
            timeSpent: '40 hours',
            progress: 0,
            status: 'Development',
            assigned:
                {name: 'Dominic Lynton 1', role: 'Front End Dev',
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI'}

        }, {
            id: 2,
            title: {name: 'New website 2',company: 'Google 2'},
            value: '20011',
            deadlineData: '15 May 2016',
            timeSpent: '40 hours',
            progress: 45,
            status: 'Development',
            assigned:
                {name: 'Dominic Lynton 2', role: 'Front End Dev',
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI'}
        }, {
            id: 3,
            title: {name: 'New website 3',company: 'Google 3'},
            company: 'Symu.co',
            value: '20011',
            deadlineData: '15 May 2016',
            timeSpent: '40 hours',
            progress: 100,
            status: 'Development',
            assigned:
                {name: 'Dominic Lynton 3', role: 'Front End Dev',
                    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI'}
        }];
        const ProjectCount = products.length;
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="projects">
                        <div className="projectsHeader">
                            <div className="title">
                                <h3>All Projects ({ProjectCount}) <span>Projects</span></h3>
                            </div>
                            <div className="select">
                                <div>
                                    <span>Show projects:: </span>
                                    <select onChange={this.onChange}>
                                        {
                                            SelectProjectData.map((item, index) => {
                                                return (
                                                    <option key={index} value={item}>
                                                        {item}
                                                    </option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="projectsBlock">
                            <BootstrapTable keyField='id'
                                            ref='table'
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
