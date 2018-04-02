import React, { Component } from 'react';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from '../Menu/SideMenu';
import HomeChart from './HomeChart';
import Projects from './Projects';
import SalesReport from './SalesReport';
import Inbox from './Inbox';
import Calendar from './Calendar';

//bootstrap 4
import { Row, Col } from 'reactstrap';

class Home extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("HomeComponents");
        return (
         <div className="wrapper">
             <HeaderMenu />
             <section id="mainContent">
                 <SideMenu />
                 <section id="home">
                     <Row>
                         <Col xl="9"><HomeChart/></Col>
                         <Col xl="3"><Projects/></Col>
                     </Row>
                     <Row>
                         <Col xl="6"><SalesReport/></Col>
                         <Col xl="3"><Inbox/></Col>
                         <Col xl="3"><Calendar/></Col>
                     </Row>
                 </section>
             </section>
         </div>
        );
    }
}

export default Home;
