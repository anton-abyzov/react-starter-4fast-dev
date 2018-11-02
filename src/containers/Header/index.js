import React from "react";
import { connectTo } from "../../utils";
import { withNamespaces } from 'react-i18next';
import { logout } from "../../actions/auth";
import Button from '../../components/common/Button';


class Header extends React.Component {
    
    render() {
        const { i18n } = this.props;
        return (
            <div>
                <Button onClick={() => { i18n.changeLanguage("en") }}>En
                    </Button>
                <Button onClick={() => { i18n.changeLanguage("de") }}>De
                    </Button>
                <div className="header">

                </div>
            </div>
        );
    }
}

export default connectTo(
    state => ({
        token: state.auth.token
    }),
    {
        logout
    },
    withNamespaces()(Header)
);
