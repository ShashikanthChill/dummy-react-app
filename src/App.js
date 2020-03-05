import React from 'react';
import Button from './Button';
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

    greet = (e) => {
        var username = e.target.username.value;
        if (username.length === 0) {
            alert("Name cannot be empty")
            return;
        }
        console.log("greet fired with val: " + username);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar theme={this.state.current_nav_theme} />
                <div className="container-fluid" style={{ marginTop: 50 + 'px', borderColor: 'black', borderStyle: 'solid', borderWidth: 1 + 'px', padding: 50 + 'px' }}>
                    <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />
                    <br />
                    <form action="#" id="name-form" onSubmit={this.greet}>
                        <label htmlFor="name">Your name:</label>
                        <br />
                        <input type="text" name="username" />
                        <br />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )

    }
}

export default App;