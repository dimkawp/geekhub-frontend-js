import React, { Component } from 'react';
import './Home.css';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from '../Menu/SideMenu';
import HomeChart from './HomeChart';
import HomeChartHeader from './HomeChartHeader';
import Projects from './Projects';
import SalesReport from './SalesReport';
import Inbox from './Inbox';
import Calendar from './Calendar';

//bootstrap 4
import { Row, Col } from 'reactstrap';

class Home extends Component {

    render() {
        console.log("HomeComponents");
        return (
         <div className="wrapper">
             <HeaderMenu />
             <section id="mainContent">
                 <SideMenu />
                 <section id="home">
                     <Row>
                         <Col className="homeChart" xl="9">
                             <HomeChartHeader />
                             <HomeChart/>
                         </Col>
                         <Col xl="3"><Projects/></Col>
                     </Row>
                     <br/>
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
