import React, { Component } from 'react';
import '../../assets/styles/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home.js';
import LinkAbout from '../LinkAbout.js';
import LinkIndustary from '../LinkIndustary';
import LinkCareer from '../LinkCareer';
import LinkBlog from '../LinkBlog';
import LinkContact from '../LinkContact';

class App extends Component {
  render() {
    
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={LinkAbout}/>
            <Route path="/industry" component={LinkIndustary}/>
            <Route path="/services" component={LinkCareer}/>
            <Route path="/pages" component={LinkBlog}/>
            <Route path="/contact" component={LinkContact}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
