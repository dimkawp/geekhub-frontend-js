import React, { Component } from 'react';
import Nav from '../Nav';

class Login extends Component {
  render() {
    console.log("LoginComponents");
    return (
      <div className="wrapper">
        Login
        <div className="container">
            <div className="loginBlock">
                <div className="header">
                <Nav />
                </div>
                <div className="formBlock">
                    <header>
                        <h3>Welcome <a href="">back!</a></h3>
                    </header>
                    <div className="formBlockContent">
                        <form action="">
                            <div className="input"><input type="text" placeholder="username"/></div>
                            <div className="input"><input type="text" placeholder="password"/></div>                            
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

export default Login;
