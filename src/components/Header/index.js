import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<div className='header-wrapper'>
					<Link to='/'>
					<div className='header-title'>
						<div className='header-title-logo'>
							<img
								className='header-title-logo__img'
								src={process.env.PUBLIC_URL + '/images/logo.svg'}
								alt='logo' 
							/>
						</div>
						<h1 className='header-title__text'>
							ADILET Kubatbek Uulu
            </h1>
					</div>
					</Link>
					<ul className='header-navs'>
						<li >
							<a
								className='header-navs__link header-navs__link_resume' 
								href={process.env.PUBLIC_URL + 'AdiletKub_CV_ENG.pdf'} download >
								download the resume
							</a>
						</li>
						<Link to='/about-me'>
							<li>
								<span className='header-navs__link' >
									about me
								</span>
							</li>
						</Link>
						<Link to='/contacts'>
							<li>
								<span className='header-navs__link' >
									contacts
								</span>
							</li>
						</Link>
						<Link to='/about-me'>
							<li>
								<span className='header-navs__link' >
									works
								</span>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header