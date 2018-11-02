import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import TextField from '../../components/common/TextField';
import Page from '../page';
import Button from '../../components/common/Button';
import { resetPassword } from '../../actions/auth';
import { toastr } from 'react-redux-toastr'; 

class ResetPassPage extends React.Component {
  state = {
    password: '',
    repeatPassword: '',
    visible: true,
    visibleRepeat: true,
    values: {}
  };

  componentDidMount() {
    !this.props.token && this.props.history.replace('/');
  }

  componentDidUpdate() {
    !this.props.token && this.props.history.replace('/');
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate() {
    let message = '';
    if (!this.state.password) {
      message = this.props.t('passwordEmpty');
    } else if (!this.state.repeatPassword) {
      message = this.props.t('repeatPasswordEmpty');
    } else if (this.state.repeatPassword !== this.state.password) {
      message = this.props.t('passwordsNotEqual');
    } else {
      return true;
    }
    toastr.error(message);
    return false;
  }

  render() {
    const { t, type } = this.props;
    const { values, password } = this.state;
    return (
      <Page>
        <div className="layout-section reset-section">
          <div className="big-header">
            {type === 'new' ? t('newPassword') : t('passwordReset')}
          </div>
        </div>
        <div className="main-content">
          <div >           
            <div >            
              <div>
                <div>{t('newPassword')}
                  <div className="card-column">
                    <TextField
                      name="password"
                      type={this.state.visible ? 'password' : ''}
                      onChange={(e) => this.handleChange(e)}
                      className="panel-element"
                      value={this.state.password}
                    />
                    <div
                      onClick={() =>
                        this.setState({ visible: !this.state.visible })
                      }
                    >
                      {this.state.visible ? (
                       <span>show</span>
                      ) : (
                        <span>hide</span>
                      )}
                    </div>
                  </div>
                </div>
                <div>{t('repeatPassword')}
                  <div className="card-column">
                    <TextField
                      name="repeatPassword"
                      type={this.state.visibleRepeat ? 'password' : ''}
                      onChange={this.handleChange}
                      className="panel-element"
                      value={this.state.repeatPassword}
                    />
                    <div
                      onClick={() =>
                        this.setState({ visibleRepeat: !this.state.visibleRepeat })
                      }
                    >
                       {this.state.visibleRepeat ? (
                       <span>show</span>
                      ) : (
                        <span>hide</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  onClick={() => {
                    this.validate() &&
                      this.props.resetPassword({
                        email: values.email,
                        token: values.token,
                        password: password
                      });
                  }}>
                  {t('common:Apply')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default connectTo(
  state => ({
    token: state.auth.token
  }),
  {
    resetPassword
  },
  withNamespaces("account")(ResetPassPage)
);
