import React, { Component } from 'react';

class Testimonials extends Component {
    render() {
      return (
        <section id="testimonials">
            <div className="testimonials-block container">
                <article>
                    <header>
                        <a href="testimonial.html"><h3>Testimonials</h3></a>        
                    </header>
                    <div className="circle"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br/>
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci <br/>
                    book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    unchanged.</p>
                </article>
                <div>
                    <span className="name">Client Name</span>
                    <span className="design">Designation</span>
                </div>
            </div>
        </section>
      );
    }
  }

export default Testimonials;