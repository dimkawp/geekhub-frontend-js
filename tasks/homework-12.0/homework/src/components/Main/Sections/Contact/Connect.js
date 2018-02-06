import React, { Component } from 'react';

class Connect extends Component {
    render() {
      return (
        <div>
        <section id="connect">
        <div className="connect-block container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <header>
                    <h3>Connect us</h3>
                </header>
                <div className="info">
                    <div className="item">
                        <i className="icon-call-out"></i>
                        <div>
                            <span>Call Us</span>
                            <span>+885 6586 5554</span>
                        </div>
                    </div>
                    <div className="item">
                        <i className="icon-envelope-open"></i>
                        <div>
                            <span>Email</span>
                            <span>info@consultplus.com</span>
                        </div>
                    </div>
                    <div className="item">
                        <i className="icon-location-pin"></i>
                        <div>
                            <span>Address</span>
                            <span>Department 98 <br/>
                                44-46 Morningside Road <br/>
                                Edinburgh, Scotland</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div className="google-map">
                    <img src="img/contact/map.fw.png" alt="map"/>
                </div>
            </div>
        </div>
    </section>
    <section id="write">
        <div className="write-block container">
            <header>
                <h3>Write to Us</h3>
            </header>
            <div className="form">
                <form>
                    <div className="inputs">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"><input type="text" placeholder="name"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"><input type="text" placeholder="email"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"><input type="text" placeholder="phone"/></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6"><input type="text" placeholder="sevice"/></div>
                        <div className="col-12"><textarea name="" id="" cols="30" rows="5" className="col-12"></textarea></div>      
                    </div>
                    <button>Submit Now</button>
                </form>
            </div>
        </div>
    </section>
    </div>
      );
    }
  }

export default Connect;