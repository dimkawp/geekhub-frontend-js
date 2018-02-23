import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopMenu extends Component {
    componentDidMount() {
        const $ = window.$;
            $(".sideMenu").click(function(){
                $(".SideMenuBlock").toggle("slow");
            });
            $(".dropdownContent").hide();
            $(".dropBtn").click(function(){         
                $(".dropdownContent").toggle("fast");
            });
    }
    logOut = () => {
        console.log(localStorage.getItem('User'));
        localStorage['User'] = 'false';
        window.location.reload();
        console.log(localStorage.getItem('User'));
    }
  render() {
    const UserImg = localStorage.getItem('UserImg');
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
                    <div className="dropdownMenu">
                    <img className="avatar" src={UserImg} alt="avatat"/>
                        <button className="dropBtn"><i className="material-icons">arrow_drop_down</i></button>
                        <div className="dropdownContent">
                            <button>CONTENT</button>
                            <button onClick={this.logOut}>LOGOUT</button>
                        </div>
                    </div>        
                </div>
            </div>
        </section>

    );
  }
}

export default TopMenu;
