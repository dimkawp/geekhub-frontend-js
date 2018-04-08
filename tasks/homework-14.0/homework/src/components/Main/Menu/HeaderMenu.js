import React, { Component } from 'react';
import './HeaderMenu.css';
import logo from '../../../assets/img/logo.fw.png';
import IconSearch from 'react-icons/lib/fa/search';
import IconBell from 'react-icons/lib/fa/bell-o';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';
import store from "../../../Redux/store";

class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBlockEvent: false,
            lastMessageEvents: false,
            lastMessageBlock: false,
            addNewProjectBlock: false,
            messageItems: [
                {
                    id: 1,
                    name: 'Nina Jones',
                    email: 'NinaJones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                    ' nisi ut aliquip ex ea commodo consequat.',
                    status: 'no-read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 2,
                    name: 'Nina2 Jones2',
                    email: 'NinaJones2@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                    ' nisi ut aliquip ex ea commodo consequat.',
                    status: 'no-read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 3,
                    name: 'Nina3 Jones3',
                    email: 'Nina3Jones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
                    status: 'read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 4,
                    name: 'Nina4 Jones4',
                    email: 'Nina3Jones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
                    status: 'read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 5,
                    name: 'Nina5 Jones5',
                    email: 'Nina3Jones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
                    status: 'read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 6,
                    name: 'Nina6 Jones6',
                    email: 'Nina3Jones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
                    status: 'read',
                    data: 'Today, 5:32 PM'
                }
            ],
            projectName: ''
        }
    }
    componentDidMount () {
        setTimeout(function () {
            this.setState({lastMessageEvents: !this.state.lastMessageEvents});
        }.bind(this), 3000);
    }
    Logout = () => {
        localStorage.setItem('User', false);
        window.location.reload();
    }

    handleChangeProjectName = (e) => {
        this.setState({projectName: e.target.value});
    }
    CreatedNewProject = (e) => {
        this.setState({projectName: e.target.value});
        let projectName = this.state.projectName;
        store.dispatch({
            type: 'NewProject',
            payload: {
                project: {
                    name: projectName
                }
            }
        })
    }
    AddNewProject = () => {
        this.setState({addNewProjectBlock: !this.state.addNewProjectBlock});
    }
    searchBlock = () => {
        this.setState({searchBlockEvent: !this.state.searchBlockEvent});
    }
    lastMessageBlock = () => {
        this.setState({lastMessageBlock: !this.state.lastMessageBlock});

    }

    render() {
        console.log("HeaderMenuComponents");
        store.subscribe(() => {
            console.log(store.getState().name);
        });
        return (
            <div className="headerBlock">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="userBlock">
                    { this.state.searchBlockEvent === true &&
                        <div className="bigSearchBlock">
                            <Input focus placeholder='Search...' />
                            <Button basic color='blue' onClick={this.searchBlock}>X</Button>
                        </div>
                    }
                    <button className="buttonAdd" onClick={this.AddNewProject}><span>Add</span></button>
                    { this.state.addNewProjectBlock === true &&
                            <div className="addNewProjectBlock">
                            <Input type='text' placeholder='Project Name' value={this.state.projectName} onChange={this.handleChangeProjectName}/>
                        <Button type='submit' onClick={this.CreatedNewProject}>CREATE</Button>
                        </div>
                    }
                    <div className="search" onClick={this.searchBlock}><IconSearch/></div>
                    <div className="events">
                        { this.state.lastMessageEvents === true &&
                            <div className="lastMessageEvents" onClick={this.lastMessageBlock}>
                                {
                                    this.state.lastMessageBlock === true &&
                                        <div className="lastMessageBlock">

                                            <div className="items">
                                                {
                                                    _.takeRight(this.state.messageItems, 3).map((item) => {
                                                        return (
                                                            <div className="item" key={item.id}>
                                                                <div className="description">
                                                                    <div className="header">
                                                                        <div className="title">{item.name}</div>
                                                                        <div className="data">{item.data}</div>
                                                                    </div>
                                                                    <div className="text">{item.description}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                }
                            </div>
                        }
                        <IconBell/>
                    </div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"/>
                    <Dropdown text=''>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New' />
                            <Dropdown.Item text='Open...' description='ctrl + o' />
                            <Dropdown.Item icon='folder' text='Move to folder' />
                            <Dropdown.Item icon='trash' text='Move to trash' />
                            <Dropdown.Divider />
                            <Button basic color='red' onClick={this.Logout}>Logout</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        );
    }
}

export default HeaderMenu;
