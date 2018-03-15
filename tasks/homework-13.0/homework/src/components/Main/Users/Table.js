import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.DropButton;
        this.UserBlock;
        this.Activity;
        this.MailBlock;
        this.PhoneBlock;
        this.state = {
          products: [
            {id: 1, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 2, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 3, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 4, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 5, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 12, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 13, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 14, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 21, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 22, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 23, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 24, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 31, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 32, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 33, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 34, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 41, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 52, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 53, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 54, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 61, name: 'User',position: 'CEO',status: 'online',mail: 'johndoe@design.com', phone: '(000) 111 222 333'},
            {id: 62, name: 'User2',position: 'WEB',status: 'online',mail: 'johndoe2@design.com', phone: '(000) 311 222 333'},
            {id: 63, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
            {id: 64, name: 'User3',position: 'DEVELOPER',status: 'offline',mail: 'johndoe3@design.com', phone: '(000) 111 777 333'},
          ]
        }
        this.props.productsDataLength(this.state.products.length);        
      }
      Activity(cell, row, enumObject, rowIndex) {
        let Activity
        if (row.status === 'online') {
          Activity = (
            <div className="activityBlock online">
              <i className="material-icons">access_time</i>
              <span>Online now!</span>
            </div>
          )

        }
        else {
          Activity = (
            <div className="activityBlock">
              <i className="material-icons">access_time</i>
              <span>data minutes ago</span>
            </div>
          )
        }
        
        return Activity
      }
      MailBlock(cell, row, enumObject, rowIndex) {
        let MailBlock
        MailBlock = (
          <div className="mailBlock">
            <span>{row.mail}</span>
          </div>
        )
        return MailBlock
      }
      PhoneBlock(cell, row, enumObject, rowIndex) {
        let PhoneBlock
        PhoneBlock = (
          <div className="phoneBlock">
            <span>{row.phone}</span>
          </div>
        )
        return PhoneBlock
      }
      DropButton(cell, row, enumObject, rowIndex) {
        let DropButton
        DropButton = (
          <div className="dropDown">
            <div className="dropWorkBtn">
              
            </div>
          </div>
        )
        return DropButton
      }
      UserBlock(cell, row, enumObject, rowIndex) {
        let UserBlock
        if (row.status === 'online') {
          UserBlock = (
            <div className="userBlock">
              <div className="avatar">
              <div className="online"></div>
                <img />
              </div>
              <div className="userBlockInfo">
                <span className='name'>{row.name}</span>
                <span className='position'>{row.position}</span>
              </div>
            </div>
          )
        }
        else {
          UserBlock = (
            <div className="userBlock">
            <div className="avatar">
              <img />
            </div>
            <div className="userBlockInfo">
              <span className='name'>{row.name}</span>
              <span className='position'>{row.position}</span>
            </div>
    
            </div>
          )
        }
        return UserBlock
      }
      
  render() {
    console.log("TableComponents");
    return (
      <div className="table">
      <BootstrapTable data={this.state.products} striped hover pagination={true}>
        <TableHeaderColumn isKey dataField='name' dataFormat={this.UserBlock} width='25%' dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='status' dataFormat={this.Activity} dataSort={true}>Last activity</TableHeaderColumn>
        <TableHeaderColumn dataField='mail' dataFormat={this.MailBlock}>Mail</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' dataFormat={this.PhoneBlock}>Phone</TableHeaderColumn>
        <TableHeaderColumn width='10%' dataFormat={this.DropButton} dataAlign="center"></TableHeaderColumn>
     </BootstrapTable>
    </div>
    );
  }
}

export default Table;
