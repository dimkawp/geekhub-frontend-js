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
                    <Link to="/">Home</Link>
                </div>
                <div className="item">
                    <i className="material-icons">playlist_add</i>
                    <Link to="/workflow">Workflow</Link>
                </div>
                <div className="item">
                    <i className="material-icons">show_chart</i>
                    <Link to="/statistics">Statistics</Link>
                </div>
                <div className="item">
                    <i className="material-icons">perm_contact_calendar</i>
                    <Link to="/calendar">Calendar</Link>
                </div>
                <div className="item">
                    <i className="material-icons">account_box</i>
                    <Link to="/users">Users</Link>
                </div>
                <div className="item">
                    <i className="material-icons">settings</i>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </section>
    );
  }
}

export default SideMenu;
