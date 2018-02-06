import React, { Component } from 'react';

class RelatedPost extends Component {
    render() {
      return (
        <section id="related-post">
        <div className="related-post-block container">
            <header>
                <h3>Related Post</h3>
            </header>
            <div className="items">
                <div className="item col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="img"></div>
                    <div className="content">
                        <h4>Blog Heading Here</h4>
                        <span>11-feb-2016</span>
                    </div>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="img"></div>
                    <div className="content">
                        <h4>Blog Heading Here</h4>
                        <span>11-feb-2016</span>
                    </div>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="img"></div>
                    <div className="content">
                        <h4>Blog Heading Here</h4>
                        <span>11-feb-2016</span>
                    </div>
                </div>
                <div className="item col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="img"></div>
                    <div className="content">
                        <h4>Blog Heading Here</h4>
                        <span>11-feb-2016</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
      );
    }
  }

export default RelatedPost;