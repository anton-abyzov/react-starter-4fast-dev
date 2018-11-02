import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';
import Page from '../page';
import AccountDataContainer from '../../containers/AccountData';
import BreadCrumbs from '../../components/BreadCrumb';
import Tab from '../../components/common/Tab';
import Tabs from '../../components/common/Tabs';

class AccountPage extends React.Component {
  state = {
    value: 0,
    me: {}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    !this.props.token && this.props.history.replace('/');
  }

  componentDidUpdate() {
    !this.props.token && this.props.history.replace('/');
  }

  

  render() {
    const { t } = this.props;
    const { value } = this.state;
    return (
      <Page>
        <div className="layout-section account-section">
          <BreadCrumbs
            links={[
              { name: t('home'), link: '/home' },
              { name: t('account'), link: '/account' }
            ]}
          />
        </div>
        <div >
          <div >
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label={t('Account')} />
            </Tabs>
            {value === 0 && <AccountDataContainer />}
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
  {  },
  withNamespaces()(AccountPage)
);
