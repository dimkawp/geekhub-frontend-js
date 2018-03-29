import React, { Component } from 'react';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
//homeComponents
import Activity from './Home/Activity';
import Messages from './Home/Messages';
import Report from './Home/Report';
import Sales from './Home/Sales';
import Tasks from './Home/Tasks';
import Preloader from './Preloader';
import store from "../../redux/store";


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          userName: ''
      }
  }
  componentWillMount(){
      console.log('testRedux');
      store.dispatch({
          type: 'User',
          payload: {
              user: {
                  name: 'ADMIN',
                  position: 'administrator',
                  avatarUrl: 'https://thumbs.dreamstime.com/z/vista-delantera-del-avatar-del-hombre-silueta-masculina-de-la-cara-90980567.jpg'
              }
          }
      })
  }
  render() {
    store.subscribe(() => {
        console.log(store.getState().name);
    });
    console.log("HomeComponents");
    return (
      <div className="wrapper home">
        <Preloader />
        <SideMenu />
        <section id="mainContent">
          <TopMenu />
          <div className="content">
            <div className="title">
              <h2>{store.getState().name}</h2>
            </div>
            <div className="homeComponents col-lg-12">
              <Sales />
              <Report />
              <div className="homeComponentsFooter">
                <Tasks />
                <Messages />
                <Activity />
              </div>
            </div>        
          </div>
        </section>  
      </div>
    );
  }
}

export default Home;
