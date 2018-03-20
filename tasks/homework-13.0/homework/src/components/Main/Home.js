import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
//homeComponents
import Activity from './Home/Activity';
import Messages from './Home/Messages';
import Report from './Home/Report';
import Sales from './Home/Sales';
import Tasks from './Home/Tasks';
import Redirect from 'react-router-dom/Redirect';
import Preloader from './Preloader';

class Home extends Component {
  render() {
    console.log("HomeComponents");
    return (
      <div className="wrapper home">
        <Preloader />
        <SideMenu />
        <section id="mainContent">
          <TopMenu />
          <div className="content">
            <div className="title">
              <h2>User Name</h2>
            </div>
            <div className="homeComponents col-lg-12">
              <Sales />
              <Report />
              <div className="homeComponentsFooter">
                <Tasks />
                <Messages />
                <Activity />
              </div>
            </div>        
          </div>
        </section>  
      </div>
    );
  }
}

export default Home;
