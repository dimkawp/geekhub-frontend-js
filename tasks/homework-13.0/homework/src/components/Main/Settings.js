import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';

class Settings extends Component {

  render() {
    console.log("SettingsComponents");
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="settingsComponents">
            <p>SETTINGS</p>

          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Settings;
