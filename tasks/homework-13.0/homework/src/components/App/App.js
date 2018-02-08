import React, { Component } from 'react';
import '../../assets/styles/main.css';
//Components
import Home from '../../components/Main/Home';
import Login from '../../components/Main/Auth/Login';
import Registration from '../../components/Main/Auth/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
