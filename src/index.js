import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Details from './components/Details'
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/styles/main.scss'

const reanderApp = () => (
  <Provider store={store}>
    <Header />
    <Details />
    <Footer />
  </Provider>
);

ReactDOM.render(reanderApp(), document.getElementById('root'));

serviceWorker.register();