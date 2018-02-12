import React, { Component } from 'react';

class About extends Component {
    componentDidMount() {
        const $ = window.$;
        $('.slider-slick').slick({
            variableWidth: true
        });
    }
    render() {
      return (
      <section id="about">
          <header>
              <h3>About us</h3>
          </header>
          <article>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/>
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer <br/>
              took a galley of type and scrambled.</p>
          </article>
          <button>Read More</button>
          <div className="container">
              <hr/>
          </div>  
          
          <div className="container">
              <div className="slider-slick" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                  <div className="item"><img src="img/about/slider/1.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/2.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/3.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/4.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/5.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/1.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/2.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/3.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/4.fw.png" alt="slider-img" /> </div>
                  <div className="item"><img src="img/about/slider/5.fw.png" alt="slider-img" /> </div>
              </div>
          </div>
      </section>
      );
    }
  }

export default About;