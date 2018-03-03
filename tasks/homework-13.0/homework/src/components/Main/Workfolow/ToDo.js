import React, { Component } from 'react';

class ToDo extends Component {
  
  render() {

    return (
      <div className="toDo col-sm-12 col-md-12 col-lg-4">
        <div className="items">      
          <div className="header">
            <h3>To Do</h3>
          </div>
        {
          this.props.data.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="preview">N</div>
                <div className="description">
                  <p>{item.title}</p>
                  <span className={item.status}><i></i>{item.data}</span>
                </div>
                <div className="itemControl">   
                <button>delete</button>
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

export default ToDo;
