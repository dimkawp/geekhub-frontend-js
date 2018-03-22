import React, { Component } from 'react';

class TotalSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSalesArray: [{id:1 ,value: 45},{id:2 ,value: 20},{id:3 ,value: 25}]
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
            <div className="item col-xs-12 col-sm-12 col-lg-4">
             <div className="demo-1" data-percent={this.state.totalSalesArray[0].value}></div>
             <div className="resultBlock">
              <p>2,300$</p>
              <span>Direct Sales</span>
             </div>
            </div>
            <div className="item col-xs-12 col-sm-12 col-lg-4">
              <div className="demo-2" data-percent={this.state.totalSalesArray[1].value}></div>
              <div className="resultBlock">
              <p>2,300$</p>
              <span>Direct Sales</span>
             </div>
            </div>
            <div className="item col-xs-12 col-sm-12 col-lg-4">
              <div className="demo-3" data-percent={this.state.totalSalesArray[2].value}></div>   
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
