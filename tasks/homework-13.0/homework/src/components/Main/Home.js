import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HomeImg from '../../assets/img/home.fw.png';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import Redirect from 'react-router-dom/Redirect';

class Home extends Component {
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper home">
        <SideMenu />
        <TopMenu />  
      </div>
    );
  }
}

export default Home;
