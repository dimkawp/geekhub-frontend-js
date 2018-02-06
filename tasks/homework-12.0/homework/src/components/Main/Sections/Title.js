import React, { Component } from 'react';
import Header from './Header.js';

class Title extends Component {
    render() {
      return (
        <section id="title">
            <div className="title-block">
                <Header />
                <h1>contact us</h1> 
            </div>
        </section>
      );
    }
  }

export default Title;