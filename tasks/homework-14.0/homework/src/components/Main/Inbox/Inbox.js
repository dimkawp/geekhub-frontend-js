import React, { Component } from 'react';
import './Inbox.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import Moment from 'react-moment';
import 'moment-timezone';
//bootstrap
import { Row, Col, } from 'reactstrap';
import { Form, TextArea, Button } from 'semantic-ui-react';


class Inbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            User: {
                id: 1,
                userName: 'Lyall Roach',
                avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI',
                role: 'UX/UI Designer',
                description: 'Lorem ipsum dolor sit amet,' +
                ' consectetur adipisicing elit,' +
                ' sed do eiusmod tempor incididunt' +
                ' ut labore et dolore magna aliqua.' +
                ' Ut enim ad minim veniam,' +
                ' quis nostrud exercitation' +
                'ullamco laboris nisi ut aliquip',
                email: 'lyallroach@gmail.com',
                phone: '+48 500 400 300',
                adress: '65 Lorem St, Warsaw, PL',
                Organization: 'Symu.co'
            },
            ChatUserGroup: [
                {
                    id: 1,
                    userName: 'Michelle Stewart',
                    data: '2018-04-13T12:59-0500',
                    correspond: [
                        {id: 1, message: 'More Random text again youMessage 1', init: 'youMessage', data: '2018-04-13T12:59-0500'},
                        {id: 2, message: 'More Random text again youMessage 2', init: 'yourMessage', data: '2018-04-12T12:59-0500'},
                        {id: 3, message: 'More Random text again youMessage 3', init: 'youMessage', data: '2018-04-11T12:59-0500'},
                        {id: 4, message: 'More Random text again yourMessage 1',init: 'yourMessage', data: '2018-04-10T12:59-0500'},
                        {id: 5, message: 'More Random text again yourMessage 2',init: 'youMessage', data: '2018-04-09T12:59-0500'},
                        {id: 6, message: 'More Random text again yourMessage 3',init: 'yourMessage', data: '2018-04-08T12:59-0500'}
                    ],
                },
                {
                    id: 2,
                    userName: 'Michelle Stewart 2',
                    data: '2018-04-13T12:59-0500',
                    correspond: [
                        {id: 1, message: 'More Random text again youMessage 1', init: 'yourMessage', data: '2018-04-13T12:59-0500'},
                        {id: 2, message: 'More Random text again youMessage 2', init: 'youMessage', data: '2018-04-12T12:59-0500'},
                        {id: 3, message: 'More Random text again youMessage 3', init: 'youMessage', data: '2018-04-11T12:59-0500'},
                        {id: 4, message: 'More Random text again yourMessage 1',init: 'youMessage', data: '2018-04-10T12:59-0500'},
                        {id: 5, message: 'More Random text again yourMessage 2',init: 'youMessage', data: '2018-04-09T12:59-0500'},
                        {id: 6, message: 'More Random text again yourMessage 3',init: 'yourMessage', data: '2018-04-08T12:59-0500'}
                    ],
                }
            ],
            Correspond: [

            ],
            NewChatGroupButton: true,
            TextMessage: '',
        };
    }
    CloseChatUserChangeGroup = (item) => {
        this.setState({
            Correspond: []
        });
    }
    ChatUserChangeGroup = (item) => {
        this.setState({
            Correspond: item.correspond
        });
    }
    handleChangeTextMessage = (e) => {
        this.setState({TextMessage: e.target.value});
        console.log(this.state.TextMessage);
    }
    createMessage = (e) => {
        let newID = this.state.Correspond.length+1;
        let message = this.state.TextMessage;
        let newMessage =
            {
                id: newID,
                message: message,
                init: 'youMessage',
                data: new Date()
            }
        ;

        this.state.Correspond.push(newMessage);
        if (message === 'hello') {
            setTimeout(function () {
                let answerMessage = 'hello i am bot Valera';
                let newAnswerMessage = {
                    id: this.state.Correspond.length+1,
                    message: answerMessage,
                    init: 'yourMessage',
                    data: new Date()
                }
                this.state.Correspond.push(newAnswerMessage);
                this.setState(this.state);
                this.state;
            }.bind(this), 3000);
        }
        this.state.TextMessage = '';
        this.setState(this.state);
        this.state;
    }
    NewCoversation = () => {
        let newID = this.state.ChatUserGroup.length+1;
        let NewCoversName = 'Michelle Stewart 3';
        let NewDate = new Date();
        let Corespond = [
            {id: 1, message: this.state.User.userName+' Created new covers', init: 'youMessage', data: NewDate},
        ];
        let newCoversationGroup = {
            id: newID,
            userName: NewCoversName,
            data: NewDate,
            correspond: Corespond
        }
        this.state.ChatUserGroup.push(newCoversationGroup);
        this.setState(this.state);
        this.state;
        this.state.NewChatGroupButton = !this.state.NewChatGroupButton;

    }
    render() {
        console.log("InboxComponents");
        const User = this.state.User;
        return (

            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="inbox">
                        <div className="headerBlock">
                            <div className="headerMenu">
                                <Moment format="YYYY-MM-DD HH:mm"></Moment>
                                <div>Inbox</div>
                                <div>Sent</div>
                                <div>Trash</div>
                            </div>
                            <div className="selectBlock">
                                <span>Filter messages:</span>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                        <Row>
                            <Col xl="3">
                                <div className="chatMessageGroup">
                                    <div className="items">
                                        {
                                            this.state.ChatUserGroup.map((item) => {
                                                return (
                                                    <div className="item" key={item.id} onClick={(e)=>this.ChatUserChangeGroup(item)}>
                                                        <div className="header">
                                                            <div className="avatar">
                                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                                                                {item.userName}
                                                            </div>
                                                            <div className="date"><Moment format="YYYY-MM-DD HH:mm">{item.data}</Moment></div>
                                                        </div>
                                                        <div className="message">
                                                            {
                                                                item.correspond > 0 &&
                                                                <p>{item.correspond.slice(-1)[0].message}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    {
                                        this.state.NewChatGroupButton === true &&
                                        <div className="newCovers"><Button onClick={this.NewCoversation}>New coversation</Button></div>
                                    }

                                </div>
                            </Col>
                            <Col xl="6">
                                <div className="correspond">
                                    {
                                        this.state.Correspond === [] &&
                                            <div>...</div>
                                    }
                                    {
                                        this.state.Correspond > [] &&
                                        <Button onClick={this.CloseChatUserChangeGroup}>x</Button>
                                    }

                                    {
                                        this.state.Correspond.map((item) => {
                                            {
                                                return (
                                                    <div className={item.init} key={item.id}>
                                                        <div className="messageBody">
                                                            <p>{item.message}</p>
                                                            <div className="date"><Moment format="YYYY-MM-DD HH:mm">{item.data}</Moment></div>
                                                        </div>
                                                        <div className="avatar">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFEkYKhA8fT4D4Q00B4_yVglFAOkMkUnncMaXaO1SDs8GhyOI" alt=""/>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })
                                    }
                                </div>
                                <div className="writeMessageBlock">
                                    {
                                        this.state.Correspond === [] &&
                                            <div>...</div>
                                    }
                                    {
                                        this.state.Correspond > [] &&
                                        <Form>
                                            <TextArea rows={1} className="writeMessageTextarea" autoHeight placeholder='Write a message' value={this.state.TextMessage} onChange={this.handleChangeTextMessage}/>
                                            <Button type='submit' onClick={this.createMessage}>WRITE</Button>
                                        </Form>
                                    }

                                </div>

                            </Col>
                            <Col xl="3">
                                <div className="userProfileInfo">
                                    <div className="avatar">
                                        <div className="status"><div className="dot"></div></div>
                                        <img src={User.avatarUrl} alt=""/>
                                    </div>
                                    <div className="title">
                                        <div className="name">{User.userName}</div>
                                        <span>{User.role}</span>
                                    </div>
                                    <div className="description">
                                        <p>{User.description}</p>
                                    </div>
                                    <div className="email">
                                        <span className="lable">email</span>
                                        <span>{User.email}</span>
                                    </div>
                                    <div className="phone">
                                        <span className="lable">phone</span>
                                        <span>{User.phone}</span>
                                    </div>
                                    <div className="adress">
                                        <span className="lable">adress</span>
                                        <span>{User.adress}</span>
                                    </div>
                                    <div className="Organization">
                                        <span className="lable">organization</span>
                                        <span>{User.organization}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </section>
                </section>
            </div>
        );
    }
}

export default Inbox;
