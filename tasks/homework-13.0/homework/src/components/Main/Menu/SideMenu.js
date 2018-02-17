import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.fw.png'

class SideMenu extends Component {
  render() {
    console.log("SideMenuComponents");
    return (
        <section id="SideMenu">
            <div className="SideMenuBlock">
                <div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
                <div className="item">
                    <i className="material-icons">home</i>
                    <span>Home</span>
                </div>
                <div className="item">
                    <i className="material-icons">playlist_add</i>
                    <span>Workflow</span>
                </div>
                <div className="item">
                    <i className="material-icons">show_chart</i>
                    <span>Statistics</span>
                </div>
                <div className="item">
                    <i className="material-icons">perm_contact_calendar</i>
                    <span>Calendar</span>
                </div>
                <div className="item">
                    <i className="material-icons">account_box</i>
                    <span>Users</span>
                </div>
                <div className="item">
                    <i className="material-icons">settings</i>
                    <span>Settings</span>
                </div>
            </div>
        </section>
    );
  }
}

export default SideMenu;
