import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    console.log("NavComponents");
    return (
        <nav>
            <div className="logo"><Link to="/"><img src="img/logo.fw.png" alt="logo"/></Link></div>
            <div className="items">
              <div className="item"><Link to="/registration">Registration</Link></div>
              <div className="item"><Link to="/Login">Login</Link></div>
            </div>
        </nav>
    );
  }
}

export default Nav;
