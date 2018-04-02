import React, { Component } from 'react';

class Raport extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("RaportComponents");
        return (
            <div>
                Raport
                <button onClick={this.Logout}>Logout</button>
            </div>

        );
    }
}

export default Raport;
