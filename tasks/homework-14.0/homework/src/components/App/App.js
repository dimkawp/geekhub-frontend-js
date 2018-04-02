import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
//components
import Login from '../../components/Main/Auth/Login';
import Home from '../../components/Main/Home/Home';
import Projects from '../../components/Main/Projects/Projects';
import Raport from '../../components/Main/Raport/Raport';
import Workflow from '../../components/Main/Workflow/Workflow';
import Inbox from '../../components/Main/Inbox/Inbox';
import PrivateLayout from './PrivateLayout';
import UserLayout from './UserLayout';

class App extends Component {
    render() {
    return (
        <Router>
            <Switch>
                <PrivateLayout exact path="/" component={Home}/>
                <PrivateLayout exact path="/projects" component={Projects}/>
                <PrivateLayout exact path="/raport" component={Raport}/>
                <PrivateLayout exact path="/workflow" component={Workflow}/>
                <PrivateLayout exact path="/inbox" component={Inbox}/>
                <UserLayout path="/login" component={Login}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
