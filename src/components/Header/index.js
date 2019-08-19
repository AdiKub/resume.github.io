import React from 'react'

import './styles.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='header-title'>
						<div className='header-title-logo'>
							<img
								className='header-title-logo__img'
								src={process.env.PUBLIC_URL + '/images/logo.svg'}
								alt='logo' />
						</div>
						<h1 className='header-title__text'>
							ADILET KUBATBEK UULU
            </h1>
					</div>
					<ul className='header-navs'>
						<li >
							<a 
								className='header-navs__link' 
								href={process.env.PUBLIC_URL + 'AdiletKub_CV_ENG.pdf'} download >
								resume
							</a>
						</li>
						<li>
							<a 
								className='header-navs__link' 
								href='g' >
								about me
							</a>
						</li>
						<li>
							<a 
								className='header-navs__link' 
								href='g'  >
								contacts
							</a>
						</li>
						<li>
							<a 
								className='header-navs__link' 
								href='g' >
								works
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header