import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import Table from './Users/Table';
import store from "../../redux/store";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsDataLength: [],
      UserTableSendData: []
    }
  }
  productsDataLength = (val) => {
    this.setState({
      productsDataLength: val
    })
  };
  UserTableSendData = (val) => {
    this.setState({
      UserTableSendData: val
    })
  };

  render() {
    console.log("UsersComponents");
    console.log(this.state.UserTableSendData.sort);
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="usersComponents">
            <Table data={this.state.UserTableSendData.sort} productsDataLength={this.productsDataLength}/>
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Users;
