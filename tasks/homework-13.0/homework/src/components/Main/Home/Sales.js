import React, { Component } from 'react';
import salesImg from '../../../assets/img/home/sales.fw.png';
import Select from './Select';

class Sales extends Component {

  render() {
    const SalesSelect = ["Last Yeat","Last Month", "Last Week"];
    console.log("SalesComponents");
    return (
        <div className="sales col-sm-12 col-md-12 col-lg-5">
          <div className="header">
            <h3>Your Sales</h3>
            <Select data={SalesSelect}/>
          </div>
          <div className="result">
            <div>
            <img src={salesImg} alt="salesImg"/>
            </div>
            <div>
              <ul>
                <li>Websites</li>
                <li>Logo</li>
                <li>Social Media</li>
                <li>Adwords</li>
                <li>E-Commerce</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Sales;
