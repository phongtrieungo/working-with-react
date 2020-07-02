import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CallbackButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasButtonBeenClicked: false
        }
    }

    handleClick = () => {        
        this.setState({ hasButtonBeenClicked: this.state.counter > 0  });
        if (this.props.callback) {
            this.props.callback();
        }
        if (this.props.incrementCallback) {
            this.props.incrementCallback(10);
        }
    }

    render() {
        
        return (
            <button className={`btn btn-${this.props.theme} btn-sm m-1`}
                onClick={ this.handleClick }
                disabled={ this.props.disabled === "true" || this.props.disabled === true }>
                { this.props.text } ({ this.props.counter || 0 })
                {
                    this.state.hasButtonBeenClicked && <div>Button Clicked!</div>
                }
            </button>
        )
    }
}

CallbackButton.defaultProps = {
    text: 'Default Text',
    theme: 'secondary',
    disabled: false
};

CallbackButton.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};