import React, { Component } from 'react';
import '../../assets/styles/main.css';
//Components
import Home from '../../components/Main/Home';
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
          <PrivateLayout exact path="/" component={Home}/>
          <UserLayout path="/login" component={Login}/>    
        </Switch>
      </Router>
    );
  }
}

export default App;
