import React, { Component } from 'react';
import Nav from '../Nav';

class Registration extends Component {
  render() {
    console.log("RegistrationComponents");
    return (
      <div className="wrapper">
        <div className="container">
            <div className="regBlock">
                <div className="header">
                <Nav />
                </div>
                <div className="formBlock">
                    <header>
                        <h3>Registration</h3>
                    </header>
                    <div className="formBlockContent">
                        <div className="form">
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">face</i>
                            <input className="col-12" type="text" placeholder="name"/>
                            </div>
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">https</i>
                            <input className="col-12" type="text" placeholder="email"/>
                            </div>
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">markunread_mailbox</i>
                            <input className="col-12" type="password" placeholder="password"/>
                            </div>
                            <button className="btnLogin" type="submit">Enter<i className="material-icons">keyboard_arrow_right</i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Registration;
