import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import './HomeChartHeader.css';

class HomeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HomeChartHeaderArray: [{id:1 ,value: 45},{id:2 ,value: 15},{id:3 ,value: 25}]
        }
    }
    render() {
        console.log("HomeChartHeaderComponents");
        return (
            <div className="homeChartHeader">
                <div className="items">
                    {
                    this.state.HomeChartHeaderArray.map((item) => {
                        return (
                            <div className="item" key={item.id}>
                                <div className="pieValue"><span>{item.value}%</span></div>
                                <PieChart
                                    className="testPieChart"
                                    lineWidth={10}
                                    totalValue={100}
                                    data={[
                                        { value: item.value, key: 1, color: '#2196F3' },
                                        { value: 100-item.value, key: 2, color: '#393C4C' }
                                    ]}
                                />
                                <div className="pieDesc">{item.value}<span>VIEWS</span></div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default HomeChart;