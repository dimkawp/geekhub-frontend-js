import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HomeImg from '../../assets/img/home.fw.png'
import Redirect from 'react-router-dom/Redirect';

class Home extends Component {
  logOut = () => {
    console.log(localStorage.getItem('User'));
    localStorage['User'] = 'false';
    window.location.reload()
    console.log(localStorage.getItem('User'));
  }
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper">
        <div className="container">
        <button onClick={this.logOut}>LOGOUT</button>
            <img src={HomeImg} alt="HomeImg" width="100%"/>
        </div>
      </div>
    );
  }
}

export default Home;
