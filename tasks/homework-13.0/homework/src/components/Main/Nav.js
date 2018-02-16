import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.fw.png'

class Nav extends Component {
  render() {
    console.log("NavComponents");
    return (
        <nav>
            <div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
              <ul className="items" role="tablist">
                <li className="item">
                  <a className="nav-link" href="#login" role="tab" data-toggle="tab">Login</a>
                </li>
                <li className="item">
                  <a className="nav-link" href="#reg" role="tab" data-toggle="tab">Registration</a>
                </li>
              </ul>
        </nav>
    );
  }
}

export default Nav;
