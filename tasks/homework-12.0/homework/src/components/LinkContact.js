import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Connect from './Main/Sections/Contact/Connect.js';
import WriteForm from './Main/Sections/Contact/WriteForm.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Preloader from './Main/Preloader.js';
import Footer from './Footer/Footer.js';

class LinkContact extends Component {
  render() {
    console.log("LinkContactComponents");
    return (
      <div>
      <Preloader />
      <Title />
      <Connect />
      <WriteForm />
      <Testimonials />
      <Footer />
      </div>
    );
  }
}

export default LinkContact;
