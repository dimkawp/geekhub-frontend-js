import React, { Component } from 'react';

class Preloader extends Component {
    componentDidMount() {
        const $ = window.$;
          var $preloader = $('#page-preloader');
          var $spinner = $preloader.find('.spinner');
          $spinner.fadeOut();
          $preloader.delay(250).fadeOut('slow');

    }
    render() {
      return (
        <div id="page-preloader">
            <span className="spinner"></span>
        </div>
      );
    }
  }

export default Preloader;