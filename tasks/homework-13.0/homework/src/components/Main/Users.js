import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';

class Users extends Component {

  render() {
    console.log("UsersComponents");
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
          <div className="workFlowComponents">
            <p>UsersComponents</p>
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Users;
