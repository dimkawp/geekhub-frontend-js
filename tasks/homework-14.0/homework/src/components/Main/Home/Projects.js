import React, { Component } from 'react';
import './Projects.css';
import { Dropdown, Button } from 'semantic-ui-react';
import store from "../../../Redux/store";

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
            testarr: ['asdad','asdsada','asdsad'],
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
    tester = () => {

        let newID = this.state.projectsItems.length+1;
        let newName = store.getState().name;
        console.log(newName);
        let newprojectsItems =
            {
                id: newID,
                title: newName,
                name: 'Nina Jones',
                email: 'NinaJones@gmail.com',
                description: 'Symu.c4o',
                sum: '4500'
            }
        ;
        this.state.projectsItems.push(newprojectsItems);
        this.setState(this.state);
        this.state;
        console.log(store.getState().name);
        //this.state.projectsItems = [...this.state.projectsItems, newprojectsItems];
        //this.setState({ projectsItems: this.state.projectsItems });
    }


    render() {
        console.log("ProjectsComponents");
        return (
            <div className="projectsBlock">
                <div className="header">
                    <h3>Your projects</h3>
                </div>

                <button onClick={this.tester}>TEST</button>

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
                                                <Button onClick={(e)=>this.removeItem(item)}>delete</Button>
                                                <br/>
                                                <Button onClick={(e)=>this.chengeStatus(item)}>add</Button>
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