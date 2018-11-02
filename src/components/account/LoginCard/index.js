import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../common/TextField';
import Button from '../../common/Button';
import { withNamespaces } from 'react-i18next';
import ActionLink from '../../../components/common/ActionLink';

class LoginCard extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
    e.preventDefault();
  }

  render() {
    const { t, forgotPassword } = this.props;
    
    return (
      <div>
        <div>
          <div>
            <div>
              {t("Login")}
            </div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <div className="input-header">{t('common:Username')} </div>
                <div className="card-column">
                  <TextField
                    name="email"
                    onChange={this.handleChange}
                    className="panel-element"
                  />
                </div>
              </div>
              <div>
                <div className="input-header">
                  {t('password')}
                </div>
                <div className="card-column">
                  <TextField
                    name="password"
                    className="panel-element"
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <div className="label">
                    {t('staySigned')}
                  </div>
                </div>

                <div className="card-column">
                  <Button
                    type='submit'
                  >
                    {t("Login")}
                  </Button>
                </div>

              </div>
              <div className="card-column">
                <ActionLink href="#" onClick={(e) => {e.preventDefault(); forgotPassword({email: this.state.email})}} label={t("ForgotPassword")}></ActionLink>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

LoginCard.propTypes = {
  login: PropTypes.func,
  forgotPassword: PropTypes.func,
  token: PropTypes.string
};

export default withNamespaces("account")(LoginCard);
