import React, { Component } from 'react';
import classNames from 'classnames';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksItems: [
        { 
          id: 1,
          status: 'delete',
          description: 'New website for Symu.co',
          data: '5 days delays'
        },
        { 
          id: 2,
          status: 'delete',
          description: 'Free business PSD Template',
          data: '2 days delays'
        },
        { 
          id: 3,
          status: 'free',
          description: 'New logo for JCD.pl',
          data: '5 days left'
        }
      ]
    };
  }
  removeItem = (itemIndex) => {
    this.state.tasksItems.splice(itemIndex, 1);
    this.setState({tasksItems: this.state.tasksItems});
  }
  render() {
    let tasksFree = this.state.tasksItems.filter(item => item.status === 'free');
    let tasksDelete = this.state.tasksItems.filter(item => item.status === 'delete');
    let tasksDeleteCount = tasksDelete.length;
    let tasksFreeeCount = tasksFree.length;
    console.log("TasksComponents");
    return (
      <div className="tasks col-sm-12 col-md-12 col-lg-4">
          <div className="header">
            <h3>Tasks</h3>
            <div className="taskCounts">
              <div className="taskFree">{tasksFreeeCount}</div>
              <div className="taskDelete">{tasksDeleteCount}</div>
            </div>
          </div>
          <div className="items">
          {
            this.state.tasksItems.map((item) => {
              return (  
              <div className="item" key={item.id}>
                <div className="preview">N</div>
                <div className="description">
                  <p>{item.description}</p>
                  <span className={item.status}><i></i>{item.data}</span>
                </div>
                <div className="itemControl">   
                <button onClick={this.removeItem}>delete</button>
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

export default Tasks;
