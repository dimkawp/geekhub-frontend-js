import React, { Component } from 'react';
import './Workflow.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import Quened from './Quened';
import Planning from './Planning';
import Design from './Design';
import Development from './Development';
import Testing from './Testing';
import Completed from './Completed';
import Select from './Select';

class Workflow extends Component {
    constructor(props) {
        super(props);
        this.refQuened = React.createRef();
        this.refPlanning = React.createRef();
        this.refDesign = React.createRef();
        this.refDevelopment = React.createRef();
        this.refTesting = React.createRef();
        this.refCompleted = React.createRef();

        this.state = {
            selectData: [],
            sumQuened: 0,
            selectDataFilter: 'All',
            Quened:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Google / 3500',
                'Wordpress theme3 / Google / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Design:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Symu.co / 3500',
                'Wordpress theme3 / Google / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Planning:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Symu.co / 3500',
                'Wordpress theme3 / Symu.co / 500',
                'Wordpress theme4 / Symu.co / 1500'
            ],
            Development:
            [
                'Wordpress theme1 / Symu.co / 2100',
                'Wordpress theme2 / Symu.co / 3200',
                'Wordpress theme3 / Symu.co / 550',
                'Wordpress theme4 / Symu.co / 1200'
            ],
            Testing:
            [
                'Wordpress theme1 / Symu.co / 100',
                'Wordpress theme2 / Symu.co / 200',
                'Wordpress theme3 / Symu.co / 50',
                'Wordpress theme4 / Symu.co / 200'
            ],
            Completed:
            [
                'Wordpress theme1 / Google / 1100',
                'Wordpress theme2 / Symu.co / 2200',
                'Wordpress theme3 / Symu.co / 520',
                'Wordpress theme4 / Symu.co / 2200'
            ],
            quenedLength: '',
            planningLength: '',
            designLength: '',
            developmentLength: '',
            testingLength: '',
            completedLength: '',
        }
    }
    componentWillMount() {
        this.state.quenedLength = this.state.Quened.length;
        this.state.planningLength = this.state.Planning.length;
        this.state.designLength = this.state.Design.length;
        this.state.developmentLength = this.state.Development.length;
        this.state.testingLength = this.state.Testing.length;
        this.state.completedLength = this.state.Completed.length;
    }

    quenedMoveToValue = (val) => {
        this.state.Quened.push(val);
        this.setState(this.state);
        this.state;
    };
    designMoveToValue = (val) => {
        this.state.Design.push(val);
        this.setState(this.state);
        this.state;
    };
    planningMoveToValue = (val) => {
        this.state.Planning.push(val);
        this.setState(this.state);
        this.state;
    };
    developmentMoveToValue = (val) => {
        this.state.Development.push(val);
        this.setState(this.state);
        this.state;
    };
    testingMoveToValue = (val) => {
        this.state.Testing.push(val);
        this.setState(this.state);
        this.state;
    };
    completedMoveToValue = (val) => {
        this.state.Completed.push(val);
        this.setState(this.state);
        this.state;
    };

    //All LENGTH Child COMPONENTS
    quenedLength = (val) => {
        this.setState({
            quenedLength: val
        });
    }
    planningLength = (val) => {
        this.setState({
            planningLength: val
        });
    }
    designLength = (val) => {
        this.setState({
            designLength: val
        });
    }
    developmentLength = (val) => {
        this.setState({
            developmentLength: val
        });
    }
    testingLength = (val) => {
        this.setState({
            testingLength: val
        });
    }
    completedLength = (val) => {
        this.setState({
            completedLength: val
        });
    }

    selectData = (val) => {
        this.refQuened.current.getFilter(val);
        this.refDesign.current.getFilter(val);
        this.refDevelopment.current.getFilter(val);
        this.refPlanning.current.getFilter(val);
        this.refTesting.current.getFilter(val);
        this.refCompleted.current.getFilter(val);
    };

    render() {
        const SelectDataOption = ["All","Symu.co","Google"];
        const countComponents =
        this.state.quenedLength +
        this.state.designLength +
        this.state.developmentLength +
        this.state.testingLength +
        this.state.completedLength;
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="workflow">
                        <div className="workflowHeader">
                            <div className="title">
                                <h3>All Projects ({countComponents}) <span>Workflow</span></h3>
                            </div>
                            <div className="select">
                                <Select
                                    option={SelectDataOption}
                                    selectData={this.selectData}
                                />
                            </div>
                        </div>
                        <div className="workflowBlock">
                            <div className="columns">
                              <Quened
                                  ref={this.refQuened}
                                  value={this.state.Quened}
                                  quenedLength={this.quenedLength}
                                  designMoveToValue={this.designMoveToValue}
                                  planningMoveToValue={this.planningMoveToValue}
                                  developmentMoveToValue={this.developmentMoveToValue}
                                  testingMoveToValue={this.testingMoveToValue}
                                  completedMoveToValue={this.completedMoveToValue}
                              />
                            </div>
                            <div className="columns">
                                <Planning
                                    ref={this.refPlanning}
                                    value={this.state.Planning}
                                    planningLength={this.planningLength}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Design
                                    ref={this.refDesign}
                                    value={this.state.Design}
                                    designLength={this.designLength}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Development
                                    ref={this.refDevelopment}
                                    value={this.state.Development}
                                    developmentLength={this.developmentLength}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Testing
                                    ref={this.refTesting}
                                    value={this.state.Testing}
                                    testingLength={this.testingLength}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Completed
                                    ref={this.refCompleted}
                                    value={this.state.Completed}
                                    completedLength={this.completedLength}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                />
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Workflow;