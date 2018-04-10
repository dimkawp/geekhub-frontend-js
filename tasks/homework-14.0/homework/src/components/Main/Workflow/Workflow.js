import React, { Component } from 'react';
import './Workflow.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import Sortable from 'react-sortablejs';
import uniqueId from 'lodash/uniqueId';
import { Dropdown, Button } from 'semantic-ui-react';
import Quened from './Quened';
import Design from './Design';
//bootstrap 4
import { Row, Col } from 'reactstrap';
//icons
import AngleRight from 'react-icons/lib/fa/angle-right';

class Workflow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Quened:
                [
                    'Wordpress theme1 / Symu.co / 2500',
                    'Wordpress theme2 / Symu.co / 3500',
                    'Wordpress theme3 / Symu.co / 500',
                    'Wordpress theme4 / Symu.co / 1500'
                ],
            Design:
            [
                'Wordpress theme1 / Symu.co / 2500',
                'Wordpress theme2 / Symu.co / 3500',
                'Wordpress theme3 / Symu.co / 500',
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
                'Wordpress theme1',
                'Wordpress theme2',
                'Wordpress theme3'
            ],
            Testing:
            [
                'Wordpress theme1',
                'Wordpress theme2',
                'Wordpress theme3'
            ],
            Completed:
            [
                'Wordpress theme1',
                'Wordpress theme2',
                'Wordpress theme3'
            ],

            workflowHeaderColumn: [
                {id: 1, title: 'Quened',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2',
                            'Wordpress theme3',
                            'Wordpress theme4'
                        ]
                },
                {id: 2, title: 'Planning',
                    items:
                        [
                            'Landing page1',
                            'Landing page2',
                            'Landing page3',
                            'Landing page4'
                        ]
                },
                {id: 3, title: 'Design',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2',
                            'Wordpress theme3'
                        ]
                },
                {id: 4, title: 'Development',
                    items:
                        [
                            'Wordpress theme1'

                        ]
                },
                {id: 5, title: 'Testing',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2',
                            'Wordpress theme3'
                        ]
                },
                {id: 6, title: 'Completed',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2',
                            'Wordpress theme3',
                            'Wordpress theme4'
                        ]
                },
                {id: 7, title: 'Testing-2',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2',
                            'Wordpress theme3',
                            'Wordpress theme4'
                        ]
                },
                {id: 8, title: 'Testing-3',
                    items:
                        [
                            'Wordpress theme1',
                            'Wordpress theme2'
                        ]
                },
            ]
        }
    }
    removeItem(item) {

    }
    PlanningGetData = (val) => {
        this.setState({
            Planning: val
        })
    };


    render() {

        const Planning = this.state.Planning.map((val, key) =>(
            <div className="item" key={uniqueId()} data-id={val}>
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                </div>
                <div className="description">
                    <p>{val}</p>
                    <span>Symu.co $1500</span>
                </div>
                <div className="dropbox">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button onClick={(e)=>this.removeItem(val)}>delete</Button>
                            <br/>
                            <Button onClick={(e)=>this.addNewProject()}>add</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));
        const Development = this.state.Development.map((val, key) =>(
            <div className="item" key={uniqueId()} data-id={val}>
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                </div>
                <div className="description">
                    <p>{val}</p>
                    <span>Symu.co $1500</span>
                </div>
                <div className="dropbox">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button onClick={(e)=>this.removeItem()}>delete</Button>
                            <br/>
                            <Button onClick={(e)=>this.addNewProject()}>add</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));
        const Testing = this.state.Testing.map((val, key) =>(
            <div className="item" key={uniqueId()} data-id={val}>
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                </div>
                <div className="description">
                    <p>{val}</p>
                    <span>Symu.co $1500</span>
                </div>
                <div className="dropbox">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button onClick={(e)=>this.removeItem()}>delete</Button>
                            <br/>
                            <Button onClick={(e)=>this.addNewProject()}>add</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));
        const Completed = this.state.Completed.map((val, key) =>(
            <div className="item" key={uniqueId()} data-id={val}>
                <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                </div>
                <div className="description">
                    <p>{val}</p>
                    <span>Symu.co $1500</span>
                </div>
                <div className="dropbox">
                    <Dropdown className="dropDownBox">
                        <Dropdown.Menu className="dropDownBoxMenu">
                            <Button onClick={(e)=>this.removeItem()}>delete</Button>
                            <br/>
                            <Button onClick={(e)=>this.addNewProject()}>add</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        ));

        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="workflow">
                        <div className="workflowHeader">
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
                        <div className="workflowBlock">
                            <div className="columns">
                              <Quened value={this.state.Quened} planningValue={this.state.Planning} quenedSendData={this.PlanningGetData}/>
                            </div>
                            <div className="columns">
                                <div className="column quenedItems">
                                    <div className="header">
                                        <div className="title">
                                            <h4>Planning</h4>
                                            <span>1 project <span>$1500</span></span>
                                        </div>
                                        <button><AngleRight /></button>
                                    </div>
                                    <div className="items">
                                        <Sortable
                                            options={{
                                                animation: 150,
                                                group: {
                                                    name: 'shared',
                                                    pull: true,
                                                    put: true
                                                }
                                            }}
                                            className="items"
                                            ref="Planning"
                                            onChange={(items) => {
                                                this.setState({ Planning: items });
                                            }}
                                        >
                                            {Planning}
                                        </Sortable>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <Design />
                            </div>
                            <div className="columns">
                                <div className="column quenedItems">
                                    <div className="header">
                                        <div className="title">
                                            <h4>Development</h4>
                                            <span>1 project <span>$1500</span></span>
                                        </div>
                                        <button><AngleRight /></button>
                                    </div>
                                    <div className="items">
                                        <Sortable
                                            options={{
                                                animation: 150,
                                                group: {
                                                    name: 'shared',
                                                    pull: true,
                                                    put: true
                                                }
                                            }}
                                            className="items"
                                            ref="Development"
                                            onChange={(items) => {
                                                this.setState({ Development: items });
                                            }}
                                        >
                                            {Development}
                                        </Sortable>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column quenedItems">
                                    <div className="header">
                                        <div className="title">
                                            <h4>Testing</h4>
                                            <span>1 project <span>$1500</span></span>
                                        </div>
                                        <button><AngleRight /></button>
                                    </div>
                                    <div className="items">
                                        <Sortable
                                            options={{
                                                animation: 150,
                                                group: {
                                                    name: 'shared',
                                                    pull: true,
                                                    put: true
                                                }
                                            }}
                                            className="items"
                                            ref="Testing"
                                            onChange={(items) => {
                                                this.setState({ Testing: items });
                                            }}
                                        >
                                            {Testing}
                                        </Sortable>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column quenedItems">
                                    <div className="header">
                                        <div className="title">
                                            <h4>Completed</h4>
                                            <span>1 project <span>$1500</span></span>
                                        </div>
                                        <button><AngleRight /></button>
                                    </div>
                                    <div className="items">
                                        <Sortable
                                            options={{
                                                animation: 150,
                                                group: {
                                                    name: 'shared',
                                                    pull: true,
                                                    put: true
                                                }
                                            }}
                                            className="items"
                                            ref="Completed"
                                            onChange={(items) => {
                                                this.setState({ Completed: items });
                                            }}
                                        >
                                            {Completed}
                                        </Sortable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Workflow;