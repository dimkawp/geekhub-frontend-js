import React, { Component } from 'react';

class Home extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("HomeComponents");
        return (
         <div>
             HOME
             <button onClick={this.Logout}>Logout</button>
         </div>

        );
    }
}

export default Home;
