import React, { Component } from 'react';
import '../assets/styles/main.css';
import Welcome from './Main/Sections/Welcome.js';
import About from './Main/Sections/About.js';
import Features from './Main/Sections/Features.js';
import Projects from './Main/Sections/Projects.js';
import Sevices from './Main/Sections/Sevices.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Blog from './Main/Sections/Blog.js';
import Contact from './Main/Sections/Contact.js';
import Footer from './Footer/Footer.js';

class Home extends Component {
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper">
      <Welcome />
      <About />
      <Features />
      <Projects />
      <Sevices />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default Home;
