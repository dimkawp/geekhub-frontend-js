import React, { Component } from 'react';
import Title from './Main/Sections/Title.js';
import Post from './Main/Sections/Blog/Post.js';
import RelatedPost from './Main/Sections/Blog/RelatedPost.js';
import Comments from './Main/Sections/Blog/Comments.js';
import Preloader from './Main/Preloader.js';
import Footer from './Footer/Footer.js';

class LinkBlogPost extends Component {
  render() {
    console.log("LinkBlogPostComponents");
    return (
      <div>
      <Preloader />
      <Title />
      <Post />
      <RelatedPost />
      <Comments />
      <Footer />
      </div>
      
    );
  }
}

export default LinkBlogPost;
