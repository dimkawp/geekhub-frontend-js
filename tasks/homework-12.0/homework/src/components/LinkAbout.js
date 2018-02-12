import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Detail from './Main/Sections/About/Detail.js';
import Information from './Main/Sections/About/Information.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Preloader from './Main/Preloader.js';
import Footer from './Footer/Footer.js';

class LinkAbout extends Component {
  render() {
    console.log("LinkAboutComponents");
    return (
      <div>
      <Preloader />
      <Title />
      <Information />
      <Detail />
      <Testimonials />
      <Footer />
      </div>
      
    );
  }
}

export default LinkAbout;
