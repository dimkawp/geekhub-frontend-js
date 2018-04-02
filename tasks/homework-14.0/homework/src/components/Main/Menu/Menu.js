import React, { Component } from 'react';

class Menu extends Component {
    Logout = () => {
        localStorage.setItem('User', false);
        this.props.history.push("/");
    }

    render() {
        console.log("MenuComponents");
        return (
            <div>
                Menu
            </div>
        );
    }
}

export default Menu;
