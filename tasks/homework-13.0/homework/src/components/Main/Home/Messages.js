import React, { Component } from 'react';

class Messages extends Component {

  render() {
    console.log("MessagesComponents");
    return (
      <div className="messages col-sm-12 col-md-12 col-lg-4">
        <div className="header">
          <h3>Messages</h3>
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
              <div className="messageControl">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
