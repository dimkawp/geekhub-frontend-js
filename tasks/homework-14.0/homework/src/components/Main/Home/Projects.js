import React, { Component } from 'react';
import './Projects.css';
import { Dropdown } from 'semantic-ui-react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectsItems: [
                {
                    id: 1,
                    title: 'Mobile App',
                    name: 'Nina Jones',
                    email: 'NinaJones@gmail.com',
                    description: 'Symu.co',
                    sum: '1500'
                },
                {
                    id: 2,
                    title: 'New dashboard',
                    name: 'Nina Jones',
                    email: 'NinaJones@gmail.com',
                    description: 'Symu.co',
                    sum: '2500'
                },
                {
                    id: 3,
                    title: 'Landing page',
                    name: 'Jones',
                    email: 'Jones@gmail.com',
                    description: 'Symu.co',
                    sum: '2500'
                }
            ],
            activeUser:
                {
                    id: 1,
                    name: 'Nina Jones',
                    email: 'NinaJones@gmail.com'
                }
        };
    }
    removeItem = (item) => {
        console.log(item.sum);

    }
    chengeStatus = (item) => {

    }

    render() {
        console.log("ProjectsComponents");
        return (
            <div className="projectsBlock">
                <div className="header">
                    <h3>Your projects</h3>
                </div>
                <div className="items">
                    {
                        this.state.projectsItems.map((item) => {
                            return (
                                this.state.activeUser.email === item.email &&
                                <div className="item" key={item.id}>
                                    <div className="avatar">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                                    </div>
                                    <div className="description">
                                        <div className="title">{item.title}</div>
                                        <div className="projectSum">{item.description} - {item.sum}</div>
                                    </div>
                                    <div className="dropbox">
                                        <Dropdown className="dropDownBox">
                                            <Dropdown.Menu className="dropDownBoxMenu">
                                                <button onClick={(e)=>this.removeItem(item)}>delete</button>
                                                <br/>
                                                <button onClick={(e)=>this.chengeStatus(item)}>add</button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Projects;