import React, { Component } from 'react';
import './Inbox.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";
import Moment from 'react-moment';
import 'moment-timezone';
//bootstrap
import { Row, Col } from 'reactstrap';

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
                    data: '1976-04-19T12:59-0500',
                    youMessage: [
                        {id: 1, message: 'asd',data: ''},
                        {id: 2, message: 'asd',data: ''},
                        {id: 3, message: 'asd',data: ''}
                    ],
                    yourMessage: [
                        {id: 1, message: 'asd',data: ''},
                        {id: 2, message: 'asd',data: ''},
                        {id: 3, message: 'asd',data: ''}
                    ],
                },
                {
                    id: 2,
                    userName: 'Michelle Stewart 2',
                    data: '1976-04-19T12:59-0500',
                    youMessage: [
                        {id: 1, message: 'asd',data: ''},
                        {id: 2, message: 'asd',data: ''},
                        {id: 3, message: 'asd',data: ''}
                    ],
                    yourMessage: [
                        {id: 1, message: 'asd',data: ''},
                        {id: 2, message: 'asd',data: ''},
                        {id: 3, message: 'asd',data: ''}
                    ],
                }
            ],
            Correspond: {
                youMessage: [
                    {id: 1, message: 'asd',data: ''},
                    {id: 2, message: 'asd',data: ''},
                    {id: 3, message: 'asd',data: ''}
                ],
                yourMessage: [
                    {id: 1, message: 'asd',data: ''},
                    {id: 2, message: 'asd',data: ''},
                    {id: 3, message: 'asd',data: ''}
                ],
            }
        };
    }
    render() {
        console.log("InboxComponents");
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
                                        <div className="item">
                                            <div className="header">
                                                <div className="avatar">
                                                    <img src="" alt=""/>
                                                </div>
                                                <div className="data"></div>
                                            </div>
                                            <div className="lastMessage">
                                                <p></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl="6">
                                <div className="correspond">
                                    <div className="yourMessage">
                                        <div className="messageBody">
                                            <p></p>
                                            <div className="data"></div>
                                        </div>
                                        <div className="avatar">
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                    <div className="youMessage">
                                        <div className="avatat">
                                            <img src="" alt=""/>
                                        </div>
                                        <div className="messageBody">
                                            <p></p>
                                            <div className="data"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="writeMessageBlock">
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                </div>

                            </Col>
                            <Col xl="3">
                                <div className="userProfileInfo">
                                    <div className="avatar">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="title">
                                        <div className="name"></div>
                                        <span></span>
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                    <div className="email">
                                        <span className="lable"></span>
                                        <span></span>
                                    </div>
                                    <div className="phone">
                                        <span className="lable"></span>
                                        <span></span>
                                    </div>
                                    <div className="adress">
                                        <span className="lable"></span>
                                        <span></span>
                                    </div>
                                    <div className="Organization">
                                        <span className="lable"></span>
                                        <span></span>
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
