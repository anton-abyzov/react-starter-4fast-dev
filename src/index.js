import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
//import './assets/styles/css/index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(

    <I18nextProvider i18n={i18n}>
        <App />
</I18nextProvider>

    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
