import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.fw.png'

class Nav extends Component {
  render() {
    console.log("NavComponents");
    return (
        <nav>
            <div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
            <div className="items">
              <div className="item"><Link to="/registration">Registration</Link></div>
              <div className="item"><Link to="/Login">Login</Link></div>
            </div>
        </nav>
    );
  }
}

export default Nav;
