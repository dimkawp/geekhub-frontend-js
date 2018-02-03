import React, { Component } from 'react';

class Blog extends Component {
    render() {
      return (
        <section id="blog">
            <header>
                <h3>Our Blog</h3>
            </header>
            <div className="blog-block container">
                <div className="content">
                    <div className="col-sm-12 col-xl-6">    
                        <article>
                            <div id="green-line"></div>
                            <div className="description">
                                <div className="img"></div>
                                <div className="text">
                                    <header>
                                        <span className="data">February 22, 2016 </span>
                                        <h4>Blog Heading here</h4>
                                    </header>
                                    <p>Established fact that a reader will be distracted by the readable of a page when looking at its layout...</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-12 col-xl-6">
                        <article>
                            <div id="yellow-line"></div>
                            <div className="description">
                                <div className="img"></div>
                                <div className="text">
                                    <header>
                                        <span className="data">February 22, 2016 </span>
                                        <h4>Blog Heading here</h4>
                                    </header>
                                    <p>Established fact that a reader will be distracted by the readable of a page when looking at its layout...</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>    
            </div>
            <button>Full Blog</button>
        </section>
      );
    }
  }

export default Blog;