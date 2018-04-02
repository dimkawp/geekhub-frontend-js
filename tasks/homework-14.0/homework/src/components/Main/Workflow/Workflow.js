import React, { Component } from 'react';
//components
import HeaderMenu from '../Menu/HeaderMenu';
import SideMenu from "../Menu/SideMenu";

class Workflow extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }
    render() {
        console.log("WorkflowComponents");
        return (
            <div className="wrapper">
                <HeaderMenu />
                <section id="mainContent">
                    <SideMenu />
                    <section id="workflow">
                        Workflow
                        <button onClick={this.Logout}>Logout</button>
                    </section>
                </section>
            </div>
        );
    }
}

export default Workflow;
