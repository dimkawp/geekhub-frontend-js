import React, { Component } from 'react';

class Tasks extends Component {

  render() {
    console.log("TasksComponents");
    return (
      <div className="tasks col-sm-12 col-md-12 col-lg-4">
          <div className="header">
            <h3>Tasks</h3>
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
              <div className="itemControl"></div>
            </div>
          </div>
        </div>

    );
  }
}

export default Tasks;
