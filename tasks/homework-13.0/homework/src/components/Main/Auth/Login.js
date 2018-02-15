import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Redirect from 'react-router/Redirect';

class Login extends Component {

    handleLogin = () => {
        console.log(this.login.value);
        const data = {
            login: this.login.value.trim(),
            password: this.password.value.trim()
        };
        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem('User', response.admin);
            window.location.reload();

        })
    }
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
                        <div className="form">
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">face</i>
                            <input className="col-12" type="text" placeholder="username" ref={el => this.login = el}/>
                            </div>
                            <div className="input col-sm-12 col-xl-6">
                            <i className="material-icons">https</i>
                            <input className="col-12" type="password" placeholder="password" ref={el => this.password = el}/>
                            </div>                            
                            <button onClick={this.handleLogin} className="btnLogin">Enter<i className="material-icons">keyboard_arrow_right</i></button>
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
