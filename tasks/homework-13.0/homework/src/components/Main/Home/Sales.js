import React, { Component } from 'react';
import salesImg from '../../../assets/img/home/sales.fw.png';

class Sales extends Component {

  render() {
    console.log("SalesComponents");
    return (
        <div className="sales col-sm-12 col-md-12 col-lg-5">
          <div className="header">
            <h3>Your Sales</h3>
            <button>
              <span>Period:</span>
              Last Year
              <i></i>
            </button>
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
