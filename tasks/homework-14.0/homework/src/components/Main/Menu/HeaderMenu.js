import React, { Component } from 'react';

class HeaderMenu extends Component {

    render() {
        console.log("HeaderMenuComponents");
        return (
            <div>
                HeaderMenu
                <button onClick={this.Logout}>Logout</button>
            </div>
        );
    }
}

export default HeaderMenu;
