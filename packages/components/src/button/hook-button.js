import React, { useState } from 'react';

export function HookButton(props) {
    const [counter, setCounter] = useState(0);
    const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

    const handleClick = () => {
        setCounter(counter + 5);
        setHasButtonBeenClicked(true);
        if (props.callback) {
            props.callback();
        }
    }

    return (
        <button onClick={ handleClick }
            className={ props.className }
            disabled={ props.disabled === "true" || props.disabled === true }>
            { props.text } ({ counter || 0 })
            {
                hasButtonBeenClicked && <div className="btn btn-sm btn-success">
                    Button Clicked
                </div>
            }
        </button>
    )
}