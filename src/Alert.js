import React, { Component } from 'react';

class Alert extends Component {
    render() {
        return (
            <div id="alrt" className={`alert ${this.props.alertColor} show`} role="alert" style={{ marginTop: 50 + 'px', display: `${this.props.display}` }} >
                {this.props.data}
                < button type="button" className="close" onClick={this.props.hideAlertFunc} aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button >
            </div >
        );
    }
}

export default Alert;