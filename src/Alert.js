import React from 'react';

const Alert = (props) => {

    return (
        <div id="alrt" className={`alert ${props.alertColor} show`} role="alert" style={{ marginTop: 50 + 'px', display: `${props.display}` }} >
            {props.data}
            < button type="button" className="close" onClick={props.hideAlertFunc} aria-label="Close" >
                <span aria-hidden="true">&times;</span>
            </button >
        </div >
    );
}


export default Alert;