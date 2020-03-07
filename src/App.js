import React from 'react';
import Button from './Button';
import Navbar from './Navbar';

class App extends React.Component {
    STR_LIGHT = "Light";
    STR_DARK = "Dark";
    BTN_STYLE_LIGHT = "btn btn-light"
    BTN_STYLE_DARK = "btn btn-dark"
    BG_DARK = "bg-dark text-white"
    BG_LIGHT = "bg-light text-dark"

    constructor(props) {
        super(props);
        this.state = {
            btn_rndr_txt: this.STR_DARK,
            btn_rndr_style: this.BTN_STYLE_DARK,
            nav_rndr_style: this.STR_LIGHT,
            bg_rndr_style: this.BG_LIGHT
        }
    }

    changeButtonText = () => {
        if (this.state.btn_rndr_txt === this.STR_DARK) {
            this.setState({
                btn_rndr_txt: this.STR_LIGHT,
                btn_rndr_style: this.BTN_STYLE_LIGHT,
                nav_rndr_style: this.STR_DARK,
                bg_rndr_style: this.BG_DARK
            });
        }
        else {
            this.setState({
                btn_rndr_txt: this.STR_DARK,
                btn_rndr_style: this.BTN_STYLE_DARK,
                nav_rndr_style: this.STR_LIGHT,
                bg_rndr_style: this.BG_LIGHT
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
        e.preventDefault(); //prevent page reload after form submit
    }

    render() {
        let btn = <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />;
        return (
            <div>
                <Navbar theme={this.state.nav_rndr_style} btn={btn} />
                <div className={`shadow-lg rounded container ${this.state.bg_rndr_style}`} style={{ marginTop: 50 + 'px', padding: 50 + 'px' }}>
                    <form action="#" id="name-form" onSubmit={this.reverseInput}>
                        <div className="form-group">
                            <label htmlFor="straight">Enter Value:</label>
                            <input className="form-control" type="text" name="straight" id="straight" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reverse">Reversed Value:</label>
                            <input className="form-control" type="text" name="reverse" id="reverse" readOnly={true} />
                        </div>
                        <input className="btn btn-primary" type="submit" value="Reverse" />
                    </form>
                </div>
            </div>
        )
    }
}

export default App;