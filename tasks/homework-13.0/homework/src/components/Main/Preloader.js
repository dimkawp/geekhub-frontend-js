import React, { Component } from 'react';
import Gif from '../../assets/img/bold-preloader.gif'

class Preloader extends Component {
    componentDidMount() {
        const $ = window.$;
          var $preloader = $('#page-preloader');
          var $spinner = $preloader.find('.spinner');
          $spinner.fadeOut();
          $preloader.delay(550).fadeOut('slow');
    }
    render() {
      return (
        <div id="page-preloader">
            <span className="spinner">
              <img src={Gif} alt="Preloader"/>
            </span>
        </div>
      );
    }
  }

export default Preloader;