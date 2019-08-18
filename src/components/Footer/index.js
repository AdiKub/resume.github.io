import React from 'react'
import './styles.scss'

const Footer = () => {
	const navs = ['adiletkub@gmail.com', '(+996) 550 054450', 'github.com/AdiKub']
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer-wrapper'>
					<ul className='footer-contacts'>
						{navs.map(nav =>
							<li
								className='footer-contacts__info'
								key={nav}>
								{nav}
							</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer;