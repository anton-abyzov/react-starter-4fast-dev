import React from 'react';
import { translate } from 'react-i18next';
import { connectTo } from '../../utils';

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
