import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import PageTestimonials from './Main/Sections/Testimonials/PageTestimonials.js';
import Projects from './Main/Sections/Projects.js';
import Projects from './Main/Sections/Testimonials.js';
import Footer from './Footer/Footer.js';

class LinkTestimonial extends Component {
  render() {
    console.log("LinkTestimonialComponents");
    return (
      <div>
      <Title />
      <PageTestimonials />
      <Projects />
      <Testimonials />
      <Footer />
      </div>
    );
  }
}

export default LinkTestimonial;
