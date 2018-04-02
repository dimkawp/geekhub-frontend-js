import React, { Component } from 'react';

class Login extends Component {
    //LOGIN
    handleLogin = () => {
        const data = {
            name: this.login.value.trim(),
            password: this.password.value.trim()
        }
        if (data.name === 'admin') {
            localStorage.setItem('User', true);
            this.props.history.push("/");
        }
        else {
            localStorage.setItem('User', false);
            this.props.history.push("/");
        }

    }

    render() {
        console.log("HomeComponents");
        return (
            <div>
                <input type="text" placeholder="username" ref={el => this.login = el}/>
                <input type="password" placeholder="password" ref={el => this.password = el}/>
                <button onClick={this.handleLogin}>Enter</button>
            </div>
        );
    }
}

export default Login;