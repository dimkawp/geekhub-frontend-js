import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//senabtic-ui
import { Dropdown } from 'semantic-ui-react'
let order = 'desc';
class Table extends Component {
      //JQ
      //componentDidMount() {
      //  const $ = window.$;
      //}
    constructor(props) {
        super(props);
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
          ],
          sortName: 'status'
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

      handleClick = (e) => {
          console.log(e+'dropdown meny');
      }

      DropButton(cell, row, enumObject, rowIndex) {
        let DropButton;
        DropButton = (
          <Dropdown className="dropDown">
            <Dropdown.Menu className="dropDownContent">
                <button>delete</button>
                <br/>
                <button>add</button>
            </Dropdown.Menu>
          </Dropdown>    
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

      onChangeSelect = (e) => {
        if (e.target.value === "Sort Name") {
          console.log(e.target.value);
          if (order === 'desc') {
            this.refs.table.handleSort('asc', 'name');
            order = 'asc';
          } else {
            this.refs.table.handleSort('desc', 'name');
            order = 'desc';
          }
        }
        if (e.target.value === "Sort Status") {
          console.log(e.target.value);
          if (order === 'desc') {
            this.refs.table.handleSort('desc', 'status');
            order = 'desc';
          } else {
            this.refs.table.handleSort('asc', 'status');
            order = 'asc';
          }
        }
    }
      
  render() {
    console.log("TableComponents");
    const UsersSelect = ["Sort Name","Sort Status"];
    return (
      <div className="table">
      <div className="headerTable">
      <div className="title">
        <h2>Users <span className="count">{"("+this.state.products.length+")"}</span></h2>
        <div>
          <span>Sort: </span>
          <select onChange={this.onChangeSelect}>  
          {
              UsersSelect.map((item, index) => {
                  return (
                  <option key={index} value={item}>
                      {item} 
                  </option>
                  ); 
              })
          }
          </select>
        </div>       
      </div>
      </div>
      <BootstrapTable ref='table'
                      data={this.state.products}
                      options={{onDeleteRow: this.handleDeleteRow}}
                      striped
                      hover
                      pagination={true}>
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
