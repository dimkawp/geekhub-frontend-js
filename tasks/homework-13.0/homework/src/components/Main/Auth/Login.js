import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Preloader from '../Preloader';
import Redirect from 'react-router/Redirect';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass: false,
            errorClass: false,
            disabled: false,
            preloader: false
        }
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }

    handleLogin = () => {
        this.setState({disabled: !this.state.disabled});
        this.setState({preloader: !this.state.preloader});
        const data = {
            name: this.login.value.trim(),
            password: this.password.value.trim()
        }
        fetch('/api/users/authentication', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            if (response.login === 'true') {
                localStorage.setItem('User', response.login);
                console.log(response.login);
                this.props.history.push("/");
            }
            else {
                console.log(response.login);
                this.setState({errorClass: true});
                this.setState({disabled: !this.state.disabled});
                this.setState({preloader: !this.state.preloader});
            }
        })
    }
    handleRegistration = () => {
        const data = {
            name: this.name.value.trim(),
            email: this.email.value.trim(),
            password: this.regPassword.value.trim(),
        }
        fetch('/api/users/create_user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response === 'user created') {
                this.props.history.push("/");
            }
            else {
                console.log(response);
                this.setState({errorClass: true});
            }
        })
    }

  render() {

    let error = [""];
    if(this.state.errorClass) {
        error.push("error");
    }

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
                                    <div className={"input col-sm-12 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">face</i>
                                    <input className="col-lg-12" type="text" placeholder="username" ref={el => this.login = el}/>
                                    </div>
                                    <div className={"input col-sm-12 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">https</i>
                                    <input className="col-lg-12" type="password" placeholder="password" ref={el => this.password = el}/>
                                    </div>                            
                                    <button disabled={this.state.disabled} onClick={this.handleLogin} className={this.state.preloader ? 'btnLogin preloader' : 'btnLogin'}>Enter<i className="material-icons">keyboard_arrow_right</i></button>
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
                                    <div className={"input col-sm-12 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">face</i>
                                    <input className="col-lg-12" type="text" placeholder="name" ref={el => this.name = el}/>
                                    </div>
                                    <div className={"input col-sm-12 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">https</i>
                                    <input className="col-lg-12" type="text" placeholder="email" ref={el => this.email = el}/>
                                    </div>
                                    <div className={"input col-sm-12 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">markunread_mailbox</i>
                                    <input className="col-lg-12" type="password" placeholder="password" ref={el => this.regPassword = el}/>
                                    </div>
                                    <button disabled={this.state.disabled} onClick={this.handleRegistration} className={this.state.preloader ? 'btnLogin preloader' : 'btnLogin'} type="submit">Enter<i className="material-icons">keyboard_arrow_right</i></button>
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
