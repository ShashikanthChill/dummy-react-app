import React from 'react';
import Button from './Button';
import Clock from './Clock';
import Navbar from './Navbar';

class App extends React.Component {
    STR_LIGHT = "Light";
    STR_DARK = "Dark";
    BTN_STYLE_LIGHT = "btn btn-light"
    BTN_STYLE_DARK = "btn btn-dark"

    constructor(props) {
        super(props);
        this.state = {
            btn_rndr_txt: this.STR_DARK,
            btn_rndr_style: this.BTN_STYLE_DARK,
            current_nav_theme: this.STR_LIGHT
        }
    }

    changeButtonText = () => {
        if (this.state.btn_rndr_txt === this.STR_DARK) {
            this.setState({
                btn_rndr_txt: this.STR_LIGHT,
                btn_rndr_style: this.BTN_STYLE_LIGHT,
                current_nav_theme: this.STR_DARK
            });
        }
        else {
            this.setState({
                btn_rndr_txt: this.STR_DARK,
                btn_rndr_style: this.BTN_STYLE_DARK,
                current_nav_theme: this.STR_LIGHT
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar theme={this.state.current_nav_theme} />
                <div className="container-fluid" style={{ marginTop: 50 + 'px' }}>
                    <Clock />
                    <br />
                    <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />
                </div>
            </div>
        )

    }
}

export default App;