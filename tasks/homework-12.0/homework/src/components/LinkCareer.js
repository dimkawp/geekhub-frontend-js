import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Jobs from './Main/Sections/Career/Jobs.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Footer from './Footer/Footer.js';

class LinkCareer extends Component {
  render() {
    console.log("LinkCareerComponents");
    return (
      <div>
      <Title />
      <Jobs />
      <Testimonials />
      <Footer />
      </div>
    );
  }
}

export default LinkCareer;
