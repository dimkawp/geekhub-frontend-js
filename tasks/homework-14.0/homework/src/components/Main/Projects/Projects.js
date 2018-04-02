import React, { Component } from 'react';

class Projects extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("ProjectsComponents");
        return (
            <div>
                Projects
                <button onClick={this.Logout}>Logout</button>
            </div>

        );
    }
}

export default Projects;
