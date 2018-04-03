import React, { Component } from 'react';
import './HeaderMenu.css';
import logo from '../../../assets/img/logo.fw.png';
import IconSearch from 'react-icons/lib/fa/search';
import IconBell from 'react-icons/lib/fa/bell-o';
import { Dropdown } from 'semantic-ui-react'


class HeaderMenu extends Component {

    render() {
        console.log("HeaderMenuComponents");
        return (
            <div className="headerBlock">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="userBlock">
                    <button className="buttonAdd" onClick={this.Logout}>Logout</button>
                    <div className="search"><IconSearch/></div>
                    <div className="events"><IconBell/></div>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"/>
                    <Dropdown text=''>
                        <Dropdown.Menu>
                            <Dropdown.Item text='New' />
                            <Dropdown.Item text='Open...' description='ctrl + o' />
                            <Dropdown.Item icon='folder' text='Move to folder' />
                            <Dropdown.Item icon='trash' text='Move to trash' />
                            <Dropdown.Divider />
                            <Dropdown.Item text='Download As...' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        );
    }
}

export default HeaderMenu;
