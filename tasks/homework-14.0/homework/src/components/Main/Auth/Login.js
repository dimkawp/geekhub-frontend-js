import React, { Component } from 'react';
//import { Button } from 'reactstrap';
import { Button, Input } from 'semantic-ui-react';
import './Login.css';
import Preloader from '../Preloader';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //LOGIN
    handleLogin = () => {
        const data = {
            name: this.login.value.trim(),
            password: this.password.value.trim()
        }
        if (data.name === 'admin') {
            localStorage.setItem('User', 'true');
            this.props.history.push("/");
        }
        else {
            localStorage.setItem('User', 'false');
            this.props.history.push("/");
        }
    }

    render() {
        console.log("HomeComponents");
        return (
            <div className="loginBlock">
                <Preloader/>
                <div className="loginForm">
                    <div className="ui input">
                        <input type="text" placeholder="username" ref={el => this.login = el}/>
                    </div>
                    <div className="ui input">
                        <input type="password" placeholder="password" ref={el => this.password = el}/>
                    </div>

                    <Button primary onClick={this.handleLogin}>Enter</Button>
                </div>

            </div>
        );
    }
}

export default Login;