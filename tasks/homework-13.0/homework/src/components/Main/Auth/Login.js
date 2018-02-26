import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Preloader from '../Preloader';
import Redirect from 'react-router/Redirect';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

class Login extends Component {

    handleLogin = () => {
        const data = {
            login: this.login.value.trim(),
            password: this.password.value.trim()
        };
        if (this.login.value.trim() === 'admin' && this.password.value.trim() === 'admin') {
            localStorage.setItem('User', 'true');
            localStorage.setItem('UserImg', 'https://cdn2.iconfinder.com/data/icons/lil-faces/233/lil-face-4-512.png');
            this.props.history.push("/");
        } 
        else {
            this.props.history.push("/");
        }
    }
  render() {
    console.log("LoginComponents");
    return (
      <div className="wrapper">
      <Preloader />
        <div className="container">
                <div className="header">
                <Nav />
                </div>
                <div className="tab-content">
                    <div role="tabpanel" className="loginBlock tab-pane fade in active" id="login">
                        <div className="formBlock">
                            <header>
                                <h3>Welcome <Link to="/">back!</Link></h3>
                            </header>
                            <div className="formBlockContent container">
                                <div className="form">
                                    <div className="input col-sm-12 col-lg-6">
                                    <i className="material-icons">face</i>
                                    <input className="col-lg-12" type="text" placeholder="username" ref={el => this.login = el}/>
                                    </div>
                                    <div className="input col-6 col-sm-12 col-lg-6">
                                    <i className="material-icons">https</i>
                                    <input className="col-lg-12" type="password" placeholder="password" ref={el => this.password = el}/>
                                    </div>                            
                                    <button onClick={this.handleLogin} className="btnLogin">Enter<i className="material-icons">keyboard_arrow_right</i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" className="regBlock tab-pane fade" id="reg">
                        <div className="formBlock">
                            <header>
                                <h3>Registration</h3>
                            </header>
                            <div className="formBlockContent">
                                <div className="form">
                                    <div className="input col-sm-12 col-lg-6">
                                    <i className="material-icons">face</i>
                                    <input className="col-lg-12" type="text" placeholder="name"/>
                                    </div>
                                    <div className="input col-sm-12 col-lg-6">
                                    <i className="material-icons">https</i>
                                    <input className="col-lg-12" type="text" placeholder="email"/>
                                    </div>
                                    <div className="input col-sm-12 col-lg-6">
                                    <i className="material-icons">markunread_mailbox</i>
                                    <input className="col-lg-12" type="password" placeholder="password"/>
                                    </div>
                                    <button className="btnLogin" type="submit">Enter<i className="material-icons">keyboard_arrow_right</i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    );
  }
}

export default Login;
