import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Preloader from '../Preloader';

import store from "../../../redux/store";

const apiUrl = "https://api-fore-homework-13.herokuapp.com"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass: false,
            errorClass: false,
            errorValid: false,
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
        fetch('http://localhost:3000/api/users/authentication', {
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
                store.dispatch({
                    type: 'Auth',
                    payload: {
                        auth: {
                            token: response.token
                        }
                    }
                })
                localStorage.setItem('User', response.login);
                localStorage.setItem('Token', response.token);
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
        this.setState({disabled: !this.state.disabled});
        this.setState({preloader: !this.state.preloader});
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.email.value.trim()) === true) {
            console.log('valid');
            const data = {
                name: this.name.value.trim(),
                email: this.email.value.trim(),
                password: this.regPassword.value.trim(),
            }
            fetch(apiUrl+'/api/users/create_user', {
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
                console.log(response);
                if (response === 'user created') {
                    this.props.history.push("/");
                }
                else {
                    console.log(response);
                   
                    this.setState({disabled: !this.state.disabled});
                    this.setState({preloader: !this.state.preloader});
                }
            })
        }
        else{
            console.log('invalid');      
            this.setState({disabled: this.state.disabled = false});
            this.setState({preloader: this.state.preloader = false});
            this.setState({errorValid: true});
        }
    }

  render() {

    let error = [""];
    let errorValid =[""];
    if(this.state.errorClass) {
        error.push("error");
    }
    if(this.state.errorValid) {
        errorValid.push("error");
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
                                {
                                    error > [] &&
                                    <div className={'login-'+error.join('')}>BAD PASSWORD OR LOGIN</div>
                                }
                                    <div className={"input col-sm-8 col-md-6 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">face</i>
                                    <input className="col-sm-12 col-md-12 col-lg-12" type="text" placeholder="username" ref={el => this.login = el}/>
                                    </div>
                                    <div className={"input col-sm-8 col-md-6 col-lg-6" + error.join(' ')}>
                                    <i className="material-icons">https</i>
                                    <input className="col-sm-12 col-md-12 col-lg-12" type="password" placeholder="password" ref={el => this.password = el}/>
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
                                {
                                    errorValid > [] &&
                                    <div className={'login-'+errorValid.join('')}>Fields not filled in correctly</div>
                                }
                                    <div className={"input col-sm-8 col-md-6 col-lg-6" + errorValid.join(' ')}>
                                    <i className="material-icons">face</i>
                                    <input className="col-sm-12 col-md-12 col-lg-12" type="text" placeholder="name" ref={el => this.name = el}/>
                                    </div>
                                    <div className={"input col-sm-8 col-md-6 col-lg-6" + errorValid.join(' ')}>
                                    <i className="material-icons">https</i>
                                    <input className="col-sm-12 col-md-12 col-lg-12" type="text" placeholder="email" ref={el => this.email = el}/>
                                    </div>
                                    <div className={"input col-sm-8 col-md-6 col-lg-6" + errorValid.join(' ')}>
                                    <i className="material-icons">markunread_mailbox</i>
                                    <input className="col-sm-12 col-md-12 col-lg-12" type="password" placeholder="password" ref={el => this.regPassword = el}/>
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
