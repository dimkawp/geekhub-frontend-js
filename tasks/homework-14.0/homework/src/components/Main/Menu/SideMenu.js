import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import IconHome from 'react-icons/lib/fa/home'
import IconBars from 'react-icons/lib/fa/bars'
import IconChart from 'react-icons/lib/fa/line-chart'
import IconMail from 'react-icons/lib/fa/envelope'
import IconUser from 'react-icons/lib/fa/user'

class SideMenu extends Component {

    render() {
        console.log("SideMenuComponents");
        return (
            <div className="sideMenuBlock">
                <div className="items">
                    <div className="item"><NavLink to="/" activeClassName="active"><IconHome/></NavLink></div>
                    <div className="item"><NavLink to="/workflow" activeClassName="active"><IconBars/></NavLink></div>
                    <div className="item"><NavLink to="/inbox" activeClassName="active"><IconChart/></NavLink></div>
                    <div className="item"><NavLink to="/projects" activeClassName="active"><IconMail/></NavLink></div>
                    <div className="item"><NavLink to="/raport" activeClassName="active"><IconUser/></NavLink></div>
                </div>
            </div>
        );
    }
}

export default SideMenu;
