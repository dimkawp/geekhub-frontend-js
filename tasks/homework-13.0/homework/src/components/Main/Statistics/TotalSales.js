import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class TotalSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    const $ = window.$;
    $('.demo-1').percentcircle(
      {
        coverBg: '#fff',
        bgColor: '#efefef',
        fillColor: '#5484FF'
      }
    );
    $('.demo-2').percentcircle(
      {
        coverBg: '#fff',
        bgColor: '#efefef',
        fillColor: '#AA5FB9'
      }
    );
    $('.demo-3').percentcircle(
      {
        coverBg: '#fff',
        bgColor: '#efefef',
        fillColor: '#F83C7B'
      }
    );
  }
  
  render() {
    
    console.log("TotalSalesComponents");

    return (
        <div className="totalSales">
          <div className="header">
            <h3>Total sales</h3>
            <div className="buttonBlock">
              <button>1</button>
              <button>2</button>
            </div>
          </div>
          <div className="items">
            <div className="item col-sm-12 col-lg-4">
             <div className="demo-1" data-percent="45"></div>
             <div className="resultBlock">
              <p>2,300$</p>
              <span>Direct Sales</span>
             </div>
            </div>
            <div className="item col-sm-12 col-lg-4">
              <div className="demo-2" data-percent="20"></div>
              <div className="resultBlock">
              <p>2,300$</p>
              <span>Direct Sales</span>
             </div>
            </div>
            <div className="item col-sm-12 col-lg-4">
              <div className="demo-3" data-percent="25"></div>   
              <div className="resultBlock">
              <p>2,300$</p>
              <span>Direct Sales</span>
             </div>  
            </div>
          </div>
        </div>
    );
  }
}

export default TotalSales;
