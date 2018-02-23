import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopMenu extends Component {
    componentDidMount() {
        const $ = window.$;
            $(".sideMenu").click(function(){
                $(".SideMenuBlock").toggle("slow");
            });
    }
    logOut = () => {
        console.log(localStorage.getItem('User'));
        localStorage['User'] = 'false';
        window.location.reload();
        console.log(localStorage.getItem('User'));
    }
  render() {
    console.log("TopMenuComponents");
    return (
        <section id="topMenu">
            <div className="topMenuBlock">
                <div className="navigation">
                    <div className="sideMenu">
                        <i className="material-icons">format_align_justify</i>
                    </div>
                    <div className="search">
                        <i className="material-icons">search</i>
                    </div>
                </div>
                <div className="userProfile">
                    <button className="addProject"><i className="material-icons">add</i>Add project</button>
                    <i className="material-icons">mail</i>
                    <i className="material-icons">notifications</i>
                    <img src="" alt="avatat"/>
                    <button onClick={this.logOut}>LOGOUT</button>
                </div>
            </div>
        </section>

    );
  }
}

export default TopMenu;
