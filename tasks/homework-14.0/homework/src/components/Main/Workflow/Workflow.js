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
        this.state = {
            selectData: [],
            sumQuened: 0,
            TestQuened:
                [
                    {id: 1, body: 'Wordpress theme1 / Symu.co / 2500'},
                    {id: 2, body: 'Wordpress theme1 / Symu.co / 2500'},
                    {id: 3, body: 'Wordpress theme2 / Google / 3500'},
                    {id: 4, body: 'Wordpress theme3 / Google / 500'},
                    {id: 5, body: 'Wordpress theme4 / Symu.co / 1500'}
                ],
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
        }
    }

    sumQuened = (val) => {
        this.setState({
            sumQuened: val
        });

    };
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

    quenedLength = (val) => {
        this.setState({
            quenedLength: val
        });
        console.log('quenedLength',this.state.quenedLength);
    }

    selectData = (val) => {
        this.setState({
            Quened: val
        });

        console.log('selectData',this.state.Quened);
    };

    render() {
        console.log('workflowComponent',this.state.Quened);
        const SelectDataOption = ["All","Symu.co","Google"];
        const WorkflowCount =
            this.state.Quened.length +
            this.state.Design.length +
            this.state.Development.length +
            this.state.Planning.length +
            this.state.Testing.length +
            this.state.Completed.length;
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="workflow">
                        <div className="workflowHeader">
                            <div className="title">
                                <h3>All Projects ({WorkflowCount}) <span>Workflow</span></h3>
                            </div>
                            <div className="select">
                                <span>Show projects:</span>
                                <Select
                                    option={SelectDataOption}
                                    value={this.state.Quened}
                                    selectData={this.selectData}/>
                            </div>
                        </div>
                        <div className="workflowBlock">
                            <div className="columns">
                              <Quened
                                  sumQuened={this.sumQuened}
                                  selectFilter={this.state.selectData}
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
                                    value={this.state.Planning}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Design
                                    value={this.state.Design}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Development
                                    value={this.state.Development}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    testingMoveToValue={this.testingMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Testing
                                    value={this.state.Testing}
                                    quenedMoveToValue={this.quenedMoveToValue}
                                    designMoveToValue={this.designMoveToValue}
                                    planningMoveToValue={this.planningMoveToValue}
                                    developmentMoveToValue={this.developmentMoveToValue}
                                    completedMoveToValue={this.completedMoveToValue}
                                />
                            </div>
                            <div className="columns">
                                <Completed
                                    value={this.state.Completed}
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