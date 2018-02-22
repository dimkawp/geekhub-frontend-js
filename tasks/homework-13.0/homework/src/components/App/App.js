import React, { Component } from 'react';
import '../../assets/styles/main.css';
//Components
import Home from '../../components/Main/Home';
import Workflow from '../../components/Main/Workflow';
import Statistics from '../../components/Main/Statistics';
import Calendar from '../../components/Main/Calendar';
import Users from '../../components/Main/Users';
import Settings from '../../components/Main/Settings';
import Login from '../../components/Main/Auth/Login';
import Registration from '../../components/Main/Auth/Registration';
import Private from './Private';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateLayout from './PrivateLayout';
import UserLayout from './UserLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateLayout exact path="/workflow" component={Workflow}/>
          <PrivateLayout exact path="/statistics" component={Statistics}/>
          <PrivateLayout exact path="/calendar" component={Calendar}/>
          <PrivateLayout exact path="/users" component={Users}/>
          <PrivateLayout exact path="/settings" component={Settings}/>
          <PrivateLayout exact path="/" component={Home}/>
          <UserLayout path="/login" component={Login}/>    
        </Switch>
      </Router>
    );
  }
}

export default App;
