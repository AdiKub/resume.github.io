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
								alt='logo' 
							/>
						</div>
						<h1 className='header-title__text'>
							ADILET Kubatbek Uulu
            </h1>
					</div>
					<ul className='header-navs'>
						<li className='header-navs_download_box'>
							<div className='header-navs_download'>
								<div className='header-navs_download_arr'>

								</div>
							</div>
							<a
								className='header-navs__link header-navs__link_resume' 
								href={process.env.PUBLIC_URL + 'AdiletKub_CV_ENG.pdf'} download >
								resume
							</a>
						</li>
							<li>
								<a href='/' className='header-navs__link' >
									about me
								</a>
							</li>
							<li>
								<a href='/'className='header-navs__link' >
									contacts
								</a>
							</li>
							<li>
								<a href='/' className='header-navs__link' >
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