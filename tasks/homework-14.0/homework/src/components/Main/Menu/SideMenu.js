import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends Component {

    render() {
        console.log("SideMenuComponents");
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/workflow">Workflow</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/raport">Raport</Link></li>
                </ul>
            </div>
        );
    }
}

export default SideMenu;
