import React, { Component } from 'react';
import Header from './Header.js';

class Welcome extends Component {
    render() {
      return (
            <section id="welcome">
                    
                <div id="demo" className="carousel slide" data-ride="carousel">
                
                    <div className="carousel-indicators">
                        <div data-target="#demo" data-slide-to="0" className="active"></div>
                        <div data-target="#demo" data-slide-to="1"></div>
                        <div data-target="#demo" data-slide-to="2"></div>
                    </div>
                    
                
                    <div className="carousel-inner">
                        
                        <div className="welcome-block container">
                            <Header />
                            <h2>We are leading consulting company</h2>
                            <h1>Choose your industry</h1>
                            <div className="items container">
                                <div className="item">
                                    <img src="img/welcome/1.fw.png" alt=""/>
                                    <span>Education</span>
                                </div>
                                <div className="item">
                                    <img src="img/welcome/2.fw.png" alt=""/>
                                    <span>Business</span>
                                </div>
                                <div className="item">
                                    <img src="img/welcome/3.fw.png" alt=""/>
                                    <span>Technology</span>
                                </div>
                                <div className="item">
                                    <img src="img/welcome/4.fw.png" alt=""/>
                                    <span>Education</span>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item active">
                        
                        </div>
                        <div className="carousel-item">
                        
                        </div>
                        <div className="carousel-item">
                        
                        </div>
                    </div>
                </div>
            </section>
      );
    }
  }

export default Welcome;