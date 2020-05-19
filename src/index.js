import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import {AppRouter} from './router.js';
import './assets/styles/main.scss'

const reanderApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(reanderApp(), document.getElementById('root'));

serviceWorker.register();