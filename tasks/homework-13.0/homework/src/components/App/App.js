import React, { Component } from 'react';
import '../../assets/styles/main.css';
//Components
import Home from '../../components/Main/Home';
import Login from '../../components/Main/Auth/Login';
import Registration from '../../components/Main/Auth/Registration';
import Private from './Private';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    (props) => (
      Auth.isAuthenticated === true
      ? <Component {...props}/>
      : <Redirect to='/login'/>
    )
  }/>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/login" component={Login}/>    
        </Switch>
      </Router>
    );
  }
}

export default App;
