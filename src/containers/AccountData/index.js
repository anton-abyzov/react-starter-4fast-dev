import React from "react";
import { connectTo } from "../../utils";
import { withNamespaces } from "react-i18next";
import { getMe } from '../../actions/account';
import AccountData from '../../components/account/AccountData'

class AccountDataContainer extends React.Component {

  state = {
    me: {}
  }

  componentDidMount() {    
    this.props.getMe();
  }

  componentWillReceiveProps(nextProps) {    
    if (nextProps) {
      this.setState({
        me: nextProps.me
      })
    }
  }
  
  render() {
    const { me } = this.state;
    return (
      <div>
        <AccountData user={me} >
        </AccountData>
      </div>
    );
  }
};

export default connectTo(
  state => ({
    me: state.account.me
  }),
  { getMe },
  withNamespaces()(AccountDataContainer)
);
