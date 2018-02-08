import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Home extends Component {
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper">
        Home
        <div className="container">
            <Nav />
        </div>
      </div>
    );
  }
}

export default Home;
