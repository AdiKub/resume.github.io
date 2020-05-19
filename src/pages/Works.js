import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/styles/main.scss';

const Works = () => {
	return (
		<Fragment>
			<Header />
			<div className='details'>
				<div className='container'>
					<div
						style={{
							height: '100%',
							color: '#e6ab46',
							textTransform: 'uppercase'
						}}>
						Coming soon
			  	</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Works;