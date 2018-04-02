import React, { Component } from 'react';

class Workflow extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("WorkflowComponents");
        return (
            <div>
                Workflow
                <button onClick={this.Logout}>Logout</button>
            </div>

        );
    }
}

export default Workflow;
