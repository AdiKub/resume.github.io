import React, { Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';
import './assets/styles/main.scss'


function App() {
  return (
    <Fragment>
        <Header/>
        <Details/>
        <Footer/>
    </Fragment>
  )
}

export default App;