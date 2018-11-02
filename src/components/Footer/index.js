import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-i18next';

import { connectTo } from '../../utils';
//import styles from './style';

export default connectTo(
  state => ({}),
  {},
  translate('startPage')(
    (props => {
      const { classes, t } = props;
      return (
        <footer>
         
        </footer>
      );
    })
  )
);
