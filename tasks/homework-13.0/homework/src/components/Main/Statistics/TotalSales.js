import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';
import ReactHighchartsMore from 'highcharts-more';
import HighchartsSolidGauge from 'highcharts-solid-gauge';
//config
import SolidChart from '../../../config/solidGauge.config';

class TotalSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      First: SolidChart,
      FirstTotalfieldVal: [
        {y: 70}
      ]
    }
  }
  componentDidMount() {
    const $ = window.$;


    function getAttributes ( $node ) {
      var attrs = {};
      $.each( $node[0].attributes, function ( index, attribute ) {
          attrs[attribute.name] = attribute.value;
      } );
  
      return attrs;
  }
  getAttributes(".highcharts-pane-group");
    

  }
  
  render() {
    
    console.log("TotalSalesComponents");
    SolidChart.pane.background[0].backgroundColor = 'red';

    return (
        <div className="totalSales">
          <div className="items">
            <div className="item col-sm-12 col-lg-3">
            <ReactHighcharts config={SolidChart}></ReactHighcharts>
            </div>
            <div className="item col-sm-12 col-lg-3">

            </div>
            <div className="item col-sm-12 col-lg-3">
            
            </div>

          </div>
        </div>
    );
  }
}

export default TotalSales;
