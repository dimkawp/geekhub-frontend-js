import React, { Component } from 'react';
//senabtic-ui
import { Dropdown } from 'semantic-ui-react'

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
  removeItem(item) {
    const newItem = this.state.tasksItems.filter(tasksItems => {
      return tasksItems !== item;
    });
    this.setState({
      tasksItems: [...newItem]
    })
    console.log(item);
  }
  chengeStatus(item) {
    if (item.status === 'free') {
      item.status = 'delete'
    }
    else {
      item.status = 'free';
    }
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
            {
              tasksFreeeCount > 0 &&
              <div className="taskFree">{tasksFreeeCount}</div>
            }          
            {
              tasksDeleteCount > 0 && 
              <div className="taskDelete">{tasksDeleteCount}</div>
            }                        
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
              <Dropdown className="dropDown">
                <Dropdown.Menu className="dropDownContent">
                    <button onClick={(e)=>this.removeItem(item)}>delete</button>
                    <br/>
                    <button onClick={(e)=>this.chengeStatus(item)}>add</button>
                </Dropdown.Menu>
              </Dropdown>    
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
