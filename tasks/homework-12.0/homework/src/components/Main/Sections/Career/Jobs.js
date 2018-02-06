import React, { Component } from 'react';

class Jobs extends Component {
    render() {
      return (
        <div>
        <section id="jobs">
        <div className="jobs-block container">
            <header>
                <h3>New jobs</h3>
            </header>
            <div className="information">
                <ul>
                    <li>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <span>accountant manager</span>
                            <span>full time</span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="location">
                                <i className="icon-location-pin"></i>
                                <span>Location : </span>
                                <span>San francisco</span>
                            </div>
                            <button>Apply Now</button>
                        </div>
                    </li>
                    <li>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <span>Computer & information systam manager</span>
                            <span>full time</span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="location">
                                <i className="icon-location-pin"></i>
                                <span>Location : </span>
                                <span>San francisco</span>
                            </div>
                            <button>Apply Now</button>
                        </div>
                    </li>
                    <li>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <span>sales executive</span>
                            <span>full time</span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="location">
                                <i className="icon-location-pin"></i>
                                <span>Location : </span>
                                <span>San francisco</span>
                            </div>
                            <button>Apply Now</button>
                        </div>
                    </li>
                    <li>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <span>education consultants</span>
                            <span>full time</span>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="location">
                                <i className="icon-location-pin"></i>
                                <span>Location : </span>
                                <span>San francisco</span>
                            </div>
                            <button>Apply Now</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="form">
                <form>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="first Name"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="Last Name"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="Email"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="Phone number"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="Location (City)"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4"><input type="text" placeholder="Resume/CV"/></div>
                        <div className="col-12"><textarea name="" id="" cols="30" rows="10" placeholder="Write your self / copy paste your Resume"></textarea></div>
                        
                    
                    </div>
                    <button type="submit">Submit application</button>
                </form>
            </div>
        </div>
    </section>
    <section id="partners">
        <div className="container">
            <header>
                <span>Companies we’ve helped</span>
                <span>Lorem Ipsum is simply dummy</span>
            </header>
            <div className="slider-slick" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                <div className="item"><img src="img/about/slider/1.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/2.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/3.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/4.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/5.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/5.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/1.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/2.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/3.fw.png" alt="slider-img"/> </div>
                <div className="item"><img src="img/about/slider/4.fw.png" alt="slider-img"/> </div>
            </div>
        </div>
    </section>
    </div>
      );
    }
  }

export default Jobs;