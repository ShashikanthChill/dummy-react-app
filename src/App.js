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

    reverseInput = (e) => {
        var ipt_str = e.target.straight.value;
        if (ipt_str.length <= 1) {
            alert("input value should be more than one character long");
            return;
        }
        var rev_str = ipt_str.split('').reverse().join('');
        e.target.reverse.value = e.target.straight.value.split('').reverse().join('');
        if (rev_str === ipt_str) {
            alert("reverse is same as input value")
        }
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar theme={this.state.current_nav_theme} />
                <div className="container-fluid" style={{ marginTop: 50 + 'px', borderColor: 'black', borderStyle: 'solid', borderWidth: 1 + 'px', padding: 50 + 'px' }}>
                    <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />
                    <br />
                    <form action="#" id="name-form" onSubmit={this.reverseInput}>
                        <label htmlFor="name">Your name:</label>
                        <br />
                        <input type="text" name="straight" />
                        <br />
                        <br />
                        <input type="text" name="reverse" readOnly={true} />
                        <br />
                        <br />
                        <input type="submit" value="Reverse" />
                    </form>
                </div>
            </div>
        )

    }
}

export default App;