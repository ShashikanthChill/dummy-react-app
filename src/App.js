import React from 'react';
import Button from './Button';
import Clock from './Clock';
import Navbar from './Navbar';

class App extends React.Component {
    STR_LIGHT = "Light";
    STR_DARK = "Dark";
    LIGHT_CLASS = "btn btn-light"
    DARK_CLASS = "btn btn-dark"

    constructor(props) {
        super(props);
        this.state = {
            current_rndr_txt: this.STR_DARK,
            current_class: this.DARK_CLASS,
            current_nav_theme: this.STR_LIGHT
        }
    }

    changeButtonText = () => {
        if (this.state.current_rndr_txt === this.STR_DARK) {
            this.setState({ current_rndr_txt: this.STR_LIGHT });
            this.setState({ current_class: this.LIGHT_CLASS });
            this.setState({ current_nav_theme: this.STR_DARK });
        }
        else {
            this.setState({ current_rndr_txt: this.STR_DARK });
            this.setState({ current_class: this.DARK_CLASS });
            this.setState({ current_nav_theme: this.STR_LIGHT });
        }
    }

    render() {
        return (
            <div>
                <Navbar theme={this.state.current_nav_theme} />
                <div className="container-fluid" style={{ marginTop: 50 + 'px' }}>
                    <Clock />
                    <br />
                    <Button onClickFunc={this.changeButtonText} str={this.state.current_rndr_txt} class={this.state.current_class} />
                </div>
            </div>
        )

    }
}

export default App;