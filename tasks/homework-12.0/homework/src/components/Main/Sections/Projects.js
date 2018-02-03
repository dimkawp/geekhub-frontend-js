import React, { Component } from 'react';

class Projects extends Component {
    render() {
      return (
        <section id="projects">
            <header>
                <h3>Projects</h3>
            </header>
            <div className="project-block container">
                <div className="col-sm-12 col-xl-4">
                    <div className="content">
                        <div className="preview">
                            <button>Banking</button>
                        </div>
                        <article>
                            <header>
                                <h4>Project Heading</h4>
                            </header>
                            <p>Popularised in the 1960s with the release <br/>
                            Letraset sheets containing Lorem.</p>
                        </article>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-8">
                    <div className="content">
                        <div className="slider">
                            <div id="demo-2" className="carousel slide" data-ride="carousel">
                                
                                <div className="carousel-indicators">
                                    <div data-target="#demo-2" data-slide-to="0" className="active"></div>
                                    <div data-target="#demo-2" data-slide-to="1"></div>
                                    <div data-target="#demo-2" data-slide-to="2"></div>
                                </div>
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="carousel-caption">
                                            <button>Real Estate</button>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <button>Real Estate</button>
                                        </div>                          
                                    </div>
                                    <div className="carousel-item">
                                        <div className="carousel-caption">
                                            <button>Real Estate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article>
                            <header>
                                <h4>Project Heading</h4>
                            </header>
                            <p>Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum <br/>
                            passages. fact that a reader will be distracted by the readable of a page when.</p>
                        </article>
                    </div>
                    <hr/>
                </div>       
            </div>
            <button>Full Projects</button>
        </section>
      );
    }
  }

export default Projects;