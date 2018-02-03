import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
        <footer>
        <div className="footer-block container">
            <div className="items">
                <div className="item col-sm-12 col-xl-4">
                    <div className="footer-logo">
                        <img src="img/logo.fw.png" alt="footer logo"/>
                    </div>
                </div>
                <div className="item col-sm-12 col-xl-2">
                    <span>navigation</span>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">about us</a>
                        </li>
                        <li>
                            <a href="">industry</a>
                        </li>
                        <li>
                            <a href="">services</a>
                        </li>
                        <li>
                            <a href="">pages</a>
                        </li>
                        <li>
                            <a href="pricing.html">pricing</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                    </ul>
                </div>
                <div className="item col-sm-12 col-xl-2">
                    <span>Industary</span>
                    <ul>
                        <li>
                            <a href="">Education</a>
                        </li>
                        <li>
                            <a href="">business</a>
                        </li>
                        <li>
                            <a href="">realestate</a>
                        </li>
                        <li>
                            <a href="">technology</a>
                        </li>
                        <li>
                            <a href="">banking</a>
                        </li>
                        <li>
                            <a href="">communication</a>
                        </li>
                        <li>
                            <a href="">much more</a>
                        </li>
                    </ul>
                </div>
                <div className="item col-sm-12 col-xl-4">
                    <span>News letter</span>
                    <div className="subscribe-block">
                        <div className="description">
                            <p>Enter your email address to subscribe our <br/>notification of our new post & features by email.</p>
                        </div>
                        <form action="">
                            <input type="text" placeholder="Email Address"/>
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="social-block">
                <div className="cop">
                    <span>Copyright © 2016 Consultplus theme.</span>
                </div>
                <div className="items">
                    <div className="item"><a href="">Facebook</a> </div>
                    <div className="item"><a href="">twitter</a> </div>
                    <div className="item"><a href="">instagram</a> </div>
                    <div className="item"><a href="">linkedin</a> </div>
                    <div className="item"><a href="">google +</a> </div>
                </div>
            </div>
        </div>
        </footer>
      );
    }
  }

export default Footer;