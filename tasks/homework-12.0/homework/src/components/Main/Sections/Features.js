import React, { Component } from 'react';

class Features extends Component {
    render() {
      return (
        <section id="features">
            <header>
                <h3>our features</h3>
            </header>
            <div className="features-block container">
                <div className="items">
                    <div className="item col-sm-12 col-xl-5">
                        <article>
                            <div className="description">
                                <header>
                                    <h4>24 hour support</h4>
                                </header>
                                <p> containing Lorem Ipsum passages, and more <br/>
                                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                        </article>
                        <article>
                            <div className="description">
                                <header>
                                    <h4>FUll security</h4>
                                </header>
                                <p>Lorem Ipsum is simply dummy text of the printing <br/>
                                and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </article>
                    </div>
                    <div className="item col-sm-12 col-xl-2">
                        <div className="logo-block">
                            
                        </div>
                    </div>
                    <div className="item col-sm-12 col-xl-5">
                        <article>
                            <div className="description">
                                <header>
                                    <h4>Business boosting</h4>
                                </header>
                                <p>established fact that a reader will be distracted by <br/>
                                the readable content of a page when looking</p>
                            </div>
                        </article>
                        <article>
                            <div className="description">
                                <header>
                                    <h4>Creative process</h4>
                                </header>
                                <p>There are many variations of passages of Ipsum avail <br/>
                                able, but the majority have suffered alteration.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-block container">
                    <span>If you want to boost your business Contact us</span>
                    <button>Boost your business</button>
                </div>
            </footer>
        </section>
      );
    }
  }

export default Features;