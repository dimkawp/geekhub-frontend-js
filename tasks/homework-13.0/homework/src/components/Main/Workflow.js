import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import ToDo from './Workfolow/ToDo';
import InProgress from './Workfolow/InProgress';
import Completed from './Workfolow/Completed';

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [
        { 
          id: 1,
          status: 'toDo',
          title: 'New website for JCD.pl',
          data: '5 minutes ago'
        }
      ],
      inProgressItems: [
        { 
          id: 2,
          status: 'inProgress',
          title: 'New logo for Apple',
          data: '5 minutes ago'
        }
      ],
      completedItems: [
        { 
          id: 3,
          status: 'complited',
          title: 'Free PSD Template vol. 1',
          data: '2 minutes ago'
        },
        { 
          id: 4,
          status: 'complited',
          title: 'New website for Symu.co',
          data: '2 minutes ago'
        },
        { 
          id: 5,
          status: 'complited',
          title: 'Iconset vol. 1',
          data: '2 minutes ago'
        }
      ]
    };
  }

  render() {
    console.log("WorkflowComponents");
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="workFlowComponents">
            <ToDo data = {this.state.toDoItems} />
            <InProgress data = {this.state.inProgressItems} />
            <Completed data = {this.state.completedItems}/>
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Workflow;
