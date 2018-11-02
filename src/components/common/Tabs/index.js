import React from 'react';
import PropTypes from 'prop-types';

class Tabs extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <div>
                <div> Tabs</div>

                {children}
            </div>
        )
    }
}

Tabs.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Tabs