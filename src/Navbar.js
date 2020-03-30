import React from 'react';

const Navbar = (props) => {

    const navLight = function (btn) {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Dummy React App</span>
                {btn}
            </nav>
        )
    }

    const navDark = function (btn) {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Dummy React App</span>
                {btn}
            </nav>
        )
    }

    return props.theme === "Light" ? navLight(props.btn) : navDark(props.btn);

}

export default Navbar;