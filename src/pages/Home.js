import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Details from '../components/Details';

import '../assets/styles/main.scss';

const Home = () => {
	return (
	<Fragment>
		  <Header />
      <Details />
      <Footer />
	</Fragment>
	)
}

export default Home;