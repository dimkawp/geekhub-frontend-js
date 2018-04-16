import React, { Component } from 'react';
import './Projects.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from '../Menu/SideMenu';
import SelectProject from './SelectProject';
//table
import BootstrapTable from 'react-bootstrap-table-next';
import { Progress, Dropdown, Button } from 'semantic-ui-react';

function rankFormatter(cell, row, rowIndex) {
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
function titleFormatter(cell, row) {
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
function deadlineFormatter(cell, row) {
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
function progressFormatter(cell, row) {
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
function AssignedFormatter(cell, row) {
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
function dropDownFormatter(cell, row) {
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

const columns = [
    {
    dataField: 'title',
    text: 'Project title',
    formatter: titleFormatter,
}, {
    dataField: 'value',
    text: 'Value',
    formatter: rankFormatter
}, {
    dataField: 'deadlineData',
    text: 'Deadline',
    formatter: deadlineFormatter
}, {
    dataField: 'timeSpent',
    text: 'Time Spent',
    formatter: rankFormatter
}, {
    dataField: 'progress',
    text: 'Progress',
    formatter: progressFormatter
}, {
    dataField: 'status',
    text: 'Status',
    formatter: rankFormatter
}, {
    dataField: 'assigned',
    text: 'Assigned to',
    formatter: AssignedFormatter
}, {
    dataField: 'id',
    text: ' ',
    formatter: dropDownFormatter
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




class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectProjectVal: 0
        }
    }

    SelectProjectSendData = (val) => {
        this.setState({
            SelectProjectVal: val
        })
        console.log('onChangeSelect', this.state.SelectProjectVal);
    }

    render() {
        console.log("ProjectsComponents");
        const ProjectCount = products.length;
        const SelectProjectData = ["Campaing","Status"];
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
                                <SelectProject value={SelectProjectData} SelectProjectSendData={this.SelectProjectSendData}/>
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
