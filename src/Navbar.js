import React, { Component } from 'react';

class Navbar extends Component {

    navLight = function (btn) {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Dummy React App</span>
                {btn}
            </nav>
        )
    }

    navDark = function (btn) {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Dummy React App</span>
                {btn}
            </nav>
        )
    }

    render() {
        return this.props.theme === "Light" ? this.navLight(this.props.btn) : this.navDark(this.props.btn);
    }
}

export default Navbar;