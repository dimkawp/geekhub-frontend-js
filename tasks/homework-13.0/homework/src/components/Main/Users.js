import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import Table from './Users/Table';
import Select from './Users/Select';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsDataLength: []
    }
  }
  productsDataLength = (val) => {
    this.setState({
      productsDataLength: val
    })
  };

  render() {
    console.log("UsersComponents");
    const UsersSelect = ["Last Yeat","Last Month", "Last Week"];
    
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="title">
            <h2>Users <span className="count">{"("+this.state.productsDataLength+")"}</span></h2>
            <Select data={UsersSelect}/>       
          </div>
          <div className="usersComponents">
            <Table productsDataLength={this.productsDataLength}/>
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Users;
