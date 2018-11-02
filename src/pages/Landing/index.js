import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { connectTo } from '../../utils';
import { withNamespaces } from 'react-i18next';
import Page from '../page';
import LoginContainer from '../../containers/Login';


class Landing extends React.Component {
  componentDidMount() {
    this.props.token && this.props.history.replace('home');
  }

  componentDidUpdate() {
    this.props.token && this.props.history.replace('home');
  }

  render() {
    
    return (
      <Page>
        <div className="layout-section login-section">
          <LoginContainer className="loginCard" />
        </div>
        <div className="textContainer">
          <div className="main-content">

          </div>
        </div>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
  }),
  {
    login
  },
  withRouter(withNamespaces()(Landing))
);
