import React, { Component } from 'react';

class Activity extends Component {

  render() {
    console.log("ActivityComponents");
    return (
        <div className="activity col-sm-12 col-md-12 col-lg-4">
          <div className="header">
            <h3>Activity</h3>
            <div>
              5,2
            </div>
          </div>
          <div className="items">
            <div className="item">
              <div className="preview">N</div>
              <div className="description">
                <p>New website for Symu.co</p>
                <span><i></i>5 days delays</span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Activity;
