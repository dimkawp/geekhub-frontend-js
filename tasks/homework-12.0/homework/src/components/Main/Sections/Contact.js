import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
          <section id="contact">
            <div className="contact-block">
                <header>
                    <h3>Quick contact</h3>
                </header>
                <div className="items container">
                    <div className="item col-sm-12 col-xl-4">
                        <img src="img/contact/1.fw.png" alt="" />
                        <div className="description">
                            <span className="titlte">Email</span>
                            <span className="email">info@consultplus.com</span>
                        </div>

                    </div> 
                    <div className="item col-sm-12 col-xl-4"> 
                        <img src="img/contact/2.fw.png" alt="" />
                        <div className="description">
                            <span className="titlte">Call Us</span>
                            <span className="email">+91 8879 8767 990</span>
                        </div>
                    </div>
                    <div className="item col-sm-12 col-xl-4">
                        <img src="img/contact/3.fw.png" alt="" />
                            <div className="description">
                                <span className="titlte">Career</span>
                                <span className="email">consult@career.com</span>
                            </div>
                    </div>   
                </div>
            </div>
          </section>
      );
    }
  }

export default Contact;