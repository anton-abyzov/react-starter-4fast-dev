import React from 'react';
import { connectTo } from '../../utils';
import style from './style';
import Page from '../page';
import { withNamespaces } from 'react-i18next';

class HomePage extends React.Component {
  componentDidMount() {
    !this.props.token && this.props.history.replace('/landing');
  }

  componentDidUpdate() {
    !this.props.token && this.props.history.replace('/landing');
  }

  render() {
    const { t } = this.props;
    return (
      <Page>
      <div className="homePageContent">
        <div style={style.homeContent}>
            {t('Home')}
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
  {},
  withNamespaces()(HomePage)
);
