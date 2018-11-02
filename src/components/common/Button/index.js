import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        const { onClick, children, type } = this.props;
        return (
            <button type={type} onClick={onClick}>{children}</button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default Button;