import React, { Component } from 'react';

class Navbar extends Component {
    
    navLight = <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Dummy React App</span>
    </nav>;

    navDark = <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Dummy React App</span>
    </nav>;

    render() {
        return this.props.theme === "Light" ? this.navLight : this.navDark;
    }
}

export default Navbar;