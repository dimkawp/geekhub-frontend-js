import React, { Component } from 'react';
//senabtic-ui
import { Dropdown } from 'semantic-ui-react'

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
    readMessage = (item) => {
    console.log(item.status);
        if (item.status === 'read') {
            item.status = 'no-read'
        }
        else {
            item.status = 'read';
        }
        this.setState({messageItems: this.state.messageItems});
    }
    removeMessage(item) {
        const newItem = this.state.messageItems.filter(messageItems => {
            return messageItems !== item;
        });
        this.setState({
            messageItems: [...newItem]
        })
        console.log(item);
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
              {noReadMessageCount > 0 &&
                <div className="noReadMessage">
                    {noReadMessageCount}
                </div>
              }
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
                  <i className="material-icons" onClick={(e)=>this.readMessage(item)}>reply</i>
                  <i className="material-icons">brightness_low
                      <Dropdown className="dropDown">
                          <Dropdown.Menu className="dropDownContent">
                              <button onClick={(e)=>this.removeMessage(item)}>delete</button>
                              <br/>
                              <button>add</button>
                          </Dropdown.Menu>
                      </Dropdown>
                  </i>
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
