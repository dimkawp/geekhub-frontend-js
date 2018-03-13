import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Table extends Component {
    constructor(props) {
        super(props);
        
      }

  render() {
    console.log("TableComponents");
    var products=[{id: 1, name: 'asdasd',price: 123},{id: 2, name: 'asdasd',price: 123},{id: 3, name: 'asdasd',price: 123}];
    return (
      <div className="table">
      <BootstrapTable data={products} striped hover>
        <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
     </BootstrapTable>
    </div>
    );
  }
}

export default Table;
