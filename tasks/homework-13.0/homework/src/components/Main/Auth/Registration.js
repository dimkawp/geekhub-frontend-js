import React, { Component } from 'react';
import Nav from '../Nav';

class Registration extends Component {
  render() {
    console.log("RegistrationComponents");
    return (
      <div className="wrapper">
        Registration
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
                        <form action="">
                            <div className="input"><input type="text" placeholder="name"/></div>
                            <div className="input"><input type="text" placeholder="email"/></div>
                            <div className="input"><input type="password" placeholder="password"/></div>
                            <button type="submit">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Registration;
