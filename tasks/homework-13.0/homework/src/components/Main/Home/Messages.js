import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageItems: [
        { 
          id: 1,
          status: 'read',
          name: 'Nina Jones',
          message: 'Hey You! It’s me again :-) I attached new (...)',
          data: '5 minutes ago'
        },
        { 
          id: 2,
          status: 'read',
          name: 'Nina Jones',
          message: 'Hey You! It’s me again :-) I attached new (...)',
          data: '5 minutes ago'
        },
        { 
          id: 3,
          status: 'no-read',
          name: 'James Smith',
          message: 'Good morning, you are fired!',
          data: '2 minutes ago'
        }
      ]
    };
  }

  render() {
    let noReadMessage = this.state.messageItems.filter(item => item.status === 'no-read');
    let noReadMessageCount = noReadMessage.length;
    console.log("MessagesComponents");
    return (
      <div className="messages col-sm-12 col-md-12 col-lg-4">
        <div className="header">
          <h3>Messages</h3>
          <div className="messageCout">
            <div className="noReadMessage">
              {noReadMessageCount}
            </div>
          </div>
        </div>
        <div className="items">
        {
          this.state.messageItems.map((item) => {
            return (
              <div className={"item " + item.status} key={item.id}>
              <div className="preview"></div>
              <div className="description">
                <div className="avtorName">{item.name} <span className="messageData">{item.data}</span></div>
                <p>{item.message}</p>
                <div className="messageControl">
                  <i className="material-icons">reply</i>
                  <i className="material-icons">brightness_low</i>
                </div>
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

export default Messages;
