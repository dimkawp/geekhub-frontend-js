import React, { Component } from 'react';

class Pricing extends Component {
    render() {
      return (
        <section id="pricing">
            <div className="pricing-block container">
                <header>
                    <h2>pricing plans</h2>
                </header>
                <div className="items row">
                    <div className="item col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="title">
                            <div className="price-info">
                                <span className="price">100$</span>
                                <span className="name">Basic Plan</span>
                            </div>
                        </div>
                        <div className="description">
                            <ul>
                                <li>Duis commodo mollis</li>
                                <li>Nam aliquet sagittis.</li>
                                <li>Fusce eleifend lectus.</li>      
                            </ul> 
                            <button>Choose plan</button>   
                        </div>
                    </div>
                    <div className="item col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="title">
                            <div className="price-info">
                                <span className="price">150$</span><span className="name">Silver Plan</span>
                            </div>       
                        </div>
                        <div className="description">
                            <ul>
                                <li>Duis commodo mollis</li>
                                <li>Nam aliquet sagittis.</li>
                                <li>Fusce eleifend lectus.</li>
                                <li>Etiam pulvinar elementum.</li>
                            </ul>
                            <button>Choose plan</button>
                        </div>
                    </div>
                    <div className="item col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="title">
                            <div className="price-info">
                                <span className="price">200$</span><span className="name">gold Plan</span>
                            </div>      
                        </div>
                        <div className="description">
                            <ul>
                                <li>Duis commodo mollis</li>
                                <li>Nam aliquet sagittis.</li>
                                <li>Fusce eleifend lectus.</li>
                                <li>Etiam pulvinar elementum.</li>
                            </ul>
                            <button>Choose plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }

export default Pricing;