import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AccountData = props => {
    
    const { email, firstName, lastName } = props.user;
    return (
        <div>
            <div className="accountData">Account Data</div>
            <div>{email}</div>
            <div>{firstName}</div>
            <div>{lastName}</div>
        </div>
    );
};

AccountData.propTypes = {
    user: PropTypes.object
};

export default AccountData;