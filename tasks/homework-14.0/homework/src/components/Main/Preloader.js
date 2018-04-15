import React, { Component } from 'react';
import Gif from '../../assets/img/preloader.gif';
import './Preloader.css';
import $ from "jquery";

class Preloader extends Component {
    componentDidMount() {
        $(document).ready(function() {
            var $preloader = $('#page-preloader');
            var $spinner = $preloader.find('.spinner');
            $spinner.delay(1000).fadeOut("fast");
            $preloader.delay(1500).fadeOut("slow");
        });

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