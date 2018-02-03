import React, { Component } from 'react';

class Header extends Component {
    render() {
      return (
        <header>
            <div className="header-block container">
                <div className="logo">
                    <img src="img/logo.fw.png" alt="logo" />
                </div>
                <nav>
                    <div className="item"><a href="home.html">home</a></div>
                    <div className="item"><a href="about.html">about us</a></div>
                    <div className="item"><a href="industary.html">industry</a></div>
                    <div className="item"><a href="career.html">services</a></div>
                    <div className="item"><a href="blog.html">pages</a></div>
                    <div className="item"><a href="contact.html">Contact us</a></div>
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