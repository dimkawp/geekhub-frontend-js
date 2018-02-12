import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Posts from './Main/Sections/Blog/Posts.js';
import Testimonials from './Main/Sections/Testimonials.js';
import Preloader from './Main/Preloader.js';
import Footer from './Footer/Footer.js';

class LinkBlog extends Component {
  render() {
    console.log("LinkBlogComponents");
    return (
      <div>
      <Preloader />
      <Title />
      <Posts />
      <Testimonials />
      <Footer />
      </div>
      
    );
  }
}

export default LinkBlog;
