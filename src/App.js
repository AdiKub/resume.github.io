import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';
import './assets/styles/main.scss'

function App() {
  
  return (
    <Provider store={store}>
      <Header />
      <Details />
      <Footer />
    </Provider>
  )
}

export default App;