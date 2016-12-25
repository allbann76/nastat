import * as polyfill from 'babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App/App';
import AppStore from './stores/AppStore';

import 'react-bootstrap';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
    (
        <Provider store={AppStore}>
            <App/>
        </Provider>
    ),
    document.body);
});
