import React from 'react';
import PropTypes from 'prop-types';

class ActionLink extends React.Component {
    render() {
        const { label, onClick, href } = this.props;
        
        return (
            <a href={href} onClick={onClick}> {label} </a>
        )
    }
}

ActionLink.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
}

export default ActionLink;
