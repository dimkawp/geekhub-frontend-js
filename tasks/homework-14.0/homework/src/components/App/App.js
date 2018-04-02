import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
//components
import Login from '../../components/Main/Auth/Login';
import Home from '../../components/Main/Home/Home';
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
