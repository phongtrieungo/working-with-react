import React from 'react';
import PropTypes from 'prop-types';

export const CallbackButton = (props) => (
    <button className={`btn btn-${props.theme} btn-sm m-1`} onClick={ props.callback }>
        { props.text }
    </button>
);

CallbackButton.defaultProps = {
    text: 'Default Text',
    theme: 'secondary'
};

CallbackButton.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string
};