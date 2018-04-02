import React, { Component } from 'react';

class Inbox extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("InboxComponents");
        return (
            <div>
                Inbox
                <button onClick={this.Logout}>Logout</button>
            </div>

        );
    }
}

export default Inbox;
