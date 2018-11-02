import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/auth';
import {
  closeForgotPass,
  openForgotPass,
  closeRegistration,
  openRegistration,
  setRegistrationEmail
} from '../../actions/startpage';

import { connectTo } from '../../utils';
import { translate } from 'react-i18next';

import Page from '../page';
//import Login from '../../components/account/Login'

//import styles from './style';
import Login from '../../containers/Login';
//import StickySideBar from '../../components/common/stickySideBar/index';
//import AboutCard from '../../components/start/cards/aboutCard';

class StartPage extends React.Component {
  componentDidMount() {
      //debugger;
    //this.props.token && this.props.history.replace('home');
  }

  componentDidUpdate() {
    //this.props.token && this.props.history.replace('home');
  }

  changeLanguage = lng => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    const { t, classes } = this.props;
    return (
      <Page>
        <div className="layout-section login-section">
          {/* <StickySideBar /> */}
          <div className="contentTitle">
            <div className="big-header">{t('contentTitle')}</div>
          </div>
          <Login className="loginCard" />
        </div>
        <div className="textContainer">
          <div className="main-content">
           
          </div>
        </div>
        {/* <div className={classes.aboutSection}> */}
        
        {/* </div> */}
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token,
    IsRegistrationOpen: state.start.IsRegistrationOpen,
    IsForgotPassOpen: state.start.IsForgotPassOpen,
    registrationEmail: state.start.registrationEmail
  }),
  {
    login,
    closeForgotPass,
    openForgotPass,
    closeRegistration,
    openRegistration,
    setRegistrationEmail
  },
  withRouter(translate('startPage')(StartPage))
);
