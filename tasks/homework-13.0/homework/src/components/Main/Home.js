import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HomeImg from '../../assets/img/home.fw.png'

class Home extends Component {
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper">
        <div className="container">
            <img src={HomeImg} alt="HomeImg" width="100%"/>
        </div>
      </div>
    );
  }
}

export default Home;
