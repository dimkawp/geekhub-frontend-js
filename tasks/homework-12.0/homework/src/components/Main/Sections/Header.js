import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <header>
            <div className="header-block container">
                <div className="logo">
                    <img src="img/logo.fw.png" alt="logo" />
                </div>
                <nav>
                    <div className="item"><Link to="/">home</Link></div>
                    <div className="item"><Link to="/about">about us</Link></div>
                    <div className="item"><Link to="/industry">industry</Link></div>
                    <div className="item"><Link to="/services">services</Link></div>
                    <div className="item"><Link to="/pages">pages</Link></div>
                    <div className="item"><Link to="/contact">Contact us</Link></div>
                    <div className="item">
                        <div className="circle">
                            <i className="icon-call-out"></i>
                        </div>
                        <span>+91 5685 6664 555</span>
                        <div className="circle">
                            <i className="icon-envelope-open"></i>
                        </div>    
                    </div>
                </nav>
            </div>
        </header>
      );
    }
  }

export default Header;