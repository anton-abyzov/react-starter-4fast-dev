import React from "react";
import { login, forgotPassword } from "../../actions/auth";
import { connectTo } from "../../utils";
import LoginCard from '../../components/account/LoginCard'

class Login extends React.Component {
  render() {
    const { login, token, forgotPassword } = this.props;
    return (
      <LoginCard login={login} token={token} forgotPassword={forgotPassword} ></LoginCard>
    )
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {
    login,
    forgotPassword
  },
  Login
);
