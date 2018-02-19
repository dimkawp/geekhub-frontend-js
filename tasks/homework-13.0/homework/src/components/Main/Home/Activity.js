import React, { Component } from 'react';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityItems: [
        { 
          id: 1,
          activity: 'added a new project',
          name: 'New website for Symu.co',
          projectName: 'Free UI Kit',
          data: 'just now'
        },
        { 
          id: 2,
          activity: 'completed project',
          name: 'New website for Symu.co',
          projectName: 'Free UI Kit',
          data: '1 hour ago'
        },
        { 
          id: 3,
          activity: 'completed task',
          name: 'New website for Symu.co',
          projectName: 'Free UI Kit',
          data: 'just now'
        },
        { 
          id: 4,
          activity: 'added a new project',
          name: 'New website for Symu.co',
          projectName: 'Free UI Kit',
          data: 'just now'
        }
      ]
    };
  }
  render() {
    console.log("ActivityComponents");
    return (
        <div className="activity col-sm-12 col-md-12 col-lg-4">
          <div className="header">
            <h3>Activity</h3>
            <div className="activityCount">
              <div className="actCount">{this.state.activityItems.length}</div>
            </div>
          </div>
          <div className="items">
          {
            this.state.activityItems.map((item, id)=> {
              return (
                <div className="item" key={item.id}>
                  <div className="preview"></div>
                  <div className="description">
                    <p>{item.name} <span>{item.activity}</span> {item.projectName}</p>
                    <span className="activityData"><i></i>{item.data}</span>
                  </div>
              </div>
              );
            })
          }
          </div>
        </div>
    );
  }
}

export default Activity;
