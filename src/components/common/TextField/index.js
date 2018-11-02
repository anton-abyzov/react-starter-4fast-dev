import React from 'react';
import PropTypes from 'prop-types';

class TextField extends React.Component {
    
    render() {
        const {value, type, onChange, name, validate, isRequired} = this.props;
        return (
            <input value={value} type={type} onChange={onChange} name={name} validate={validate} required={isRequired} />
        )
    }
}

TextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    validate: PropTypes.func,
    isRequired: PropTypes.bool
}

export default TextField;