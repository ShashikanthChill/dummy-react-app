import React, { Component } from 'react';
import Button from './Button';
import Navbar from './Navbar';
import Alert from "./Alert";

class App extends Component {
    STR_LIGHT = "Light";
    STR_DARK = "Dark";
    BTN_STYLE_LIGHT = "btn btn-light"
    BTN_STYLE_DARK = "btn btn-dark"

    constructor(props) {
        super(props);
        this.state = {
            btn_rndr_txt: this.STR_DARK,
            btn_rndr_style: this.BTN_STYLE_DARK,
            current_nav_theme: this.STR_LIGHT,
            alert_colour: "alert-warning",
            alert_display: "none",
            alert_data: "Working!"
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

    hideAlert = () => {
        console.log("alert hidden");
        this.setState(
            {
                alert_display: "none"
            }
        );
    }

    showAlert = () => {
        this.setState(
            {
                alert_display: "block"
            }
        )
    }

    greet = (e) => {
        var username = e.target.username.value;
        if (username.length === 0) {
            alert("Name cannot be empty")
            return;
        }
        console.log("greet fired with val: " + username);
        fetch("http://localhost:8080/greet?name=" + username)
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        alert_data: result.toString(),
                        alert_colour: "alert-success",
                    });
                    this.showAlert();
                },
                (error) => {
                    this.setState({
                        alert_data: error.toString(),
                        alert_colour: "alert-danger",
                    });
                    this.showAlert();
                }
            )
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar theme={this.state.current_nav_theme} />
                <div className="shadow-lg rounded container" style={{ marginTop: 50 + 'px', padding: 50 + 'px' }}>
                    <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />
                    <br />
                    <form action="#" id="greet-form" onSubmit={this.greet}>
                        <div class="form-group">
                            <label htmlFor="username">Your name</label>
                            <input class="form-control" type="text" name="username" id="username" />
                        </div>
                        <input type="submit" class="btn btn-primary" value="Greet" />
                    </form>
                    <Alert alertColor={this.state.alert_colour} data={this.state.alert_data} hideAlertFunc={this.hideAlert} display={this.state.alert_display} />
                </div>
            </div >
        )
    }
}

export default App;