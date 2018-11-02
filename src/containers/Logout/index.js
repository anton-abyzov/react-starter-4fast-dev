import React from 'react';
import { connectTo } from '../../utils';
import { logout } from "../../actions/auth";
import { withRouter } from "react-router-dom";

class Logout extends React.Component {

    componentWillMount() {
        this.props.logout();
        this.props.history.replace('/');
    }

    render() {
        return null;
    }
}

export default connectTo(
    state => ({

    }),
    {
        logout
    },
    withRouter(Logout)
);