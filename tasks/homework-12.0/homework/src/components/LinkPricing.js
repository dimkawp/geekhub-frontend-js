import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Pricing from './Main/Sections/Pricing/Pricing.js';
import Questions from './Main/Sections/Pricing/Questions.js';
import Footer from './Footer/Footer.js';

class LinkPricing extends Component {
  render() {
    console.log("LinkPricingComponents");
    return (
      <div>
      <Title />
      <Pricing />
      <Questions />
      <Footer />
      </div>
    );
  }
}

export default LinkPricing;
