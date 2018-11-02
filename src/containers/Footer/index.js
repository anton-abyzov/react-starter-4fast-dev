import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connectTo } from '../../utils';

export default connectTo(
    state => ({}),
    {},
    withNamespaces()(
        (props => {

            return (
                <footer>

                </footer>
            );
        })
    )
);
