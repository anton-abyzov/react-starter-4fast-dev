import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    render() {
        const { label } = this.props;
        return (
            <div>
                {label}
            </div>
        )
    }
}

Tab.propTypes = {
    label: PropTypes.string,
};

export default Tab;