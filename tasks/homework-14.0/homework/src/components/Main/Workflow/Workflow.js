import React, { Component } from 'react';
import './Workflow.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
//bootstrap 4
import { Row, Col } from 'reactstrap';

class Workflow extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }
    render() {
        console.log("WorkflowComponents");
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
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column quenedItems">
                                    <div className="header">Quened</div>
                                    <div className="items">
                                        <div className="item">
                                            <div className="avatar">
                                                <img src="" alt=""/>
                                            </div>
                                            <div className="description">
                                                <p>Wordpress theme</p>
                                                <span>Symu.co $1500</span>
                                            </div>
                                        </div>
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
