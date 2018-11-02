import React from 'react';
import PropTypes from 'prop-types';

class SelectField extends React.Component {
    render() {
        //TBD
        return (
            <select>
                <option>1</option>
                <option>2</option>
            </select>
        )
    }
}

SelectField.propTypes = {
    values: PropTypes.array
};

export default SelectField