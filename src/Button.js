import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button type="button" className={props.class} id="btn" onClick={props.onClickFunc}>
                {props.str}
            </button>
        </div>
    )
}

export default Button;
