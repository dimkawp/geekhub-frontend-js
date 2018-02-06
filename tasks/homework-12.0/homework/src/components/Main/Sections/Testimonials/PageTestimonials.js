import React, { Component } from 'react';

class PageTestimonials extends Component {
    render() {
      return (
      <div>  
        <section id="happy-clients">
        <div className="happy-clients-block container">
            <header>
                <h3>Happy cLients</h3>
            </header>
            <div className="items">
                
                <div className="item col-sm-12 col-md-6 col-xl-6">
                    <div className="img">
                        <img src="img/testimonials/face.fw.png" alt="face"/>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="name">
                            <span>Client Name</span>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                
                <div className="item col-sm-12 col-md-6 col-xl-6">
                    <div className="img">
                        <img src="img/testimonials/face.fw.png" alt="face"/>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="name">
                            <span>Client Name</span>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                
                <div className="item col-sm-12 col-md-6 col-xl-6">
                    <div className="img">
                        <img src="img/testimonials/face.fw.png" alt="face"/>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="name">
                            <span>Client Name</span>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                
                <div className="item col-sm-12 col-md-6 col-xl-6">
                    <div className="img">
                        <img src="img/testimonials/face.fw.png" alt="face"/>
                    </div>
                    <div className="description">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="name">
                            <span>Client Name</span>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        
        <div className="carousel-indicators col-sm-12 col-md-8 col-xl-3">
            <div data-target="#myCarousel" data-slide-to="0" className="active idicator"></div>
            <div data-target="#myCarousel" data-slide-to="1" className="idicator"></div>
            <div data-target="#myCarousel" data-slide-to="2" className="idicator"></div>
        </div>
        
        <div className="carousel-inner">
            <div className="carousel-item active">
            
            <div className="carousel-caption">
                <div className="comment">
                    <p>Lorem Ipsum is simply dummy text of the printing <br/>
                    and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,
                    <br/> when an unknown printer took a galley .             
                    </p>
                    <h5>Dr.Jonathan Peeter</h5>
                    <span>Designation</span>
                </div>
            </div>
            </div>
            <div className="carousel-item">     
                <div className="carousel-caption">
                    <div className="comment">
                        <p>Lorem Ipsum is simply dummy text of the printing <br/>
                        and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,
                        <br/> when an unknown printer took a galley .             
                        </p>
                        <h5>Dr.Jonathan Peeter</h5>
                        <span>Designation</span>
                    </div>
                </div>
            </div>
            <div className="carousel-item">    
                <div className="carousel-caption">
                    <div className="comment">
                        <p>Lorem Ipsum is simply dummy text of the printing <br/>
                        and typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,
                        <br/> when an unknown printer took a galley .             
                        </p>
                        <h5>Dr.Jonathan Peeter</h5>
                        <span>Designation</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
      );
    }
  }

export default PageTestimonials;