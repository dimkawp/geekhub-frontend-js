import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Industary from './Main/Sections/Industary/Industary.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Preloader from './Main/Preloader.js';
import Footer from './Footer/Footer.js';

class LinkIndustary extends Component {
  render() {
    console.log("LinkIndustaryComponents");
    return (
      <div>
      <Preloader />
      <Title />
      <Industary />
      <Testimonials />
      <Footer />
      </div>
    );
  }
}

export default LinkIndustary;
