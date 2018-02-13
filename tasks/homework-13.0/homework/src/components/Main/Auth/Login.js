import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';

class Login extends Component {
  render() {
    console.log("LoginComponents");
    return (
      <div className="wrapper">
        <div className="container">
            <div className="loginBlock">
                <div className="header">
                <Nav />
                </div>
                <div className="formBlock">
                    <header>
                        <h3>Welcome <Link to="/">back!</Link></h3>
                    </header>
                    <div className="formBlockContent container">
                        <form action="">
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">face</i>
                            <input className="col-12" type="text" placeholder="username"/>
                            </div>
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">https</i>
                            <input className="col-12" type="password" placeholder="password"/>
                            </div>                            
                            <button className="btnLogin" type="submit">Enter<i class="material-icons">keyboard_arrow_right</i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
