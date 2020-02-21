import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className={this.props.class} id="btn" onClick={this.props.onClickFunc}>
                    {this.props.str}
                </button>
            </div>
        )
    }
}

export default Button;
