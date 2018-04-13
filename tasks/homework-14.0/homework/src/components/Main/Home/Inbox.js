import React, { Component } from 'react';
import './Inbox.css';
import $ from 'jquery';
class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageItems: [
                {
                    id: 1,
                    name: 'Nina Jones',
                    email: 'NinaJones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                    ' nisi ut aliquip ex ea commodo consequat.' +
                    ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
                    ' nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                    'officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus' +
                    ' error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa' +
                    ' quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' +
                    ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed' +
                    ' quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' +
                    ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,' +
                    ' adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et ' +
                    'dolore magnam aliquam quaerat voluptatem.',
                    status: 'no-read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 2,
                    name: 'Nina2 Jones2',
                    email: 'NinaJones2@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                    ' nisi ut aliquip ex ea commodo consequat.' +
                    ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
                    ' nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                    'officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus' +
                    ' error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa' +
                    ' quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' +
                    ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed' +
                    ' quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' +
                    ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,' +
                    ' adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et ' +
                    'dolore magnam aliquam quaerat voluptatem.',
                    status: 'no-read',
                    data: 'Today, 5:32 PM'
                },
                {
                    id: 3,
                    name: 'Nina3 Jones3',
                    email: 'Nina3Jones@gmail.com',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.\n' +
                    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris' +
                    ' nisi ut aliquip ex ea commodo consequat.' +
                    ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat' +
                    ' nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                    'officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus' +
                    ' error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa' +
                    ' quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' +
                    ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed' +
                    ' quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' +
                    ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,' +
                    ' adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et ' +
                    'dolore magnam aliquam quaerat voluptatem.',
                    status: 'read',
                    data: 'Today, 5:32 PM'
                }
            ]
        };
    }



    changeStatus = (item) => {
        if (item.status === 'no-read') {
            item.status = 'read'
        }
        else {
            item.status = 'no-read';
        }
        this.setState({messageItems: this.state.messageItems});
    }

    render() {
        console.log("InboxComponents");
        let messageItems = this.state.messageItems.filter(item => item.status === 'no-read');
        let messageItemsCount = messageItems.length;
        return (
            <div className="inboxBlock">
                <div className="header">
                    <h3>
                        Inbox
                        { messageItemsCount > 0 &&
                        <span> (<span>{messageItemsCount}</span>)</span>
                        }
                    </h3>
                </div>
                <div className="items">
                    {
                        this.state.messageItems.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <div className="avatar">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" alt="avatar"/>
                                    </div>
                                    <div className="description" onClick={(e)=>this.changeStatus(item)}>
                                        <div className={"header "+item.status}>
                                            <div className="title">{item.name}</div>
                                            <div className="data">{item.data}</div>
                                        </div>
                                        <div className="text">{item.description}</div>
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

export default Inbox;