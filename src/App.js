import React from 'react';
import Button from './Button';
import Navbar from './Navbar';
import List from "./List";

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
            bg_rndr_style: this.BG_LIGHT,
            status: "failed",
            employees: null
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

    fetchEmployees = () => {
        fetch(`http://dummy.restapiexample.com/api/v1/employees`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState(
                        {
                            status: result.status,
                            employees: result.data
                        }
                    );
                },
                (error) => {
                    console.error("oops! : " + error.toString());
                }
            )
    }

    deleteEmployee = (id) => {
        let emps = this.state.employees;
        let filt_emps = emps.filter(emp => {
            return emp.id !== id;
        })
        this.setState({
            employees: filt_emps,
        })
    }


    render() {
        let btn = <Button onClickFunc={this.changeButtonText} str={this.state.btn_rndr_txt} class={this.state.btn_rndr_style} />;
        return (
            <div>
                <Navbar theme={this.state.nav_rndr_style} btn={btn} />
                <div className={`shadow-lg rounded container ${this.state.bg_rndr_style}`} style={{ marginTop: 50 + 'px', padding: 50 + 'px' }}>
                    <List status={this.state.status} onClickFunc={this.fetchEmployees} employees={this.state.employees} delFunc={this.deleteEmployee} />
                </div>
            </div>
        )
    }
}

export default App;