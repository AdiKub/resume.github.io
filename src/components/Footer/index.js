import React from 'react'
import { useSelector } from 'react-redux'

import './styles.scss'

const Footer = () => {
	const contacts = useSelector(state => state.resume['generalInfo'].CONTACTS)

	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer-wrapper'>
					<ul className='footer-contacts'>
						{Object.keys(contacts).map(contact =>
							<li
								className='footer-contacts__info'
								key={contact}>
								{contacts[contact]}
							</li>)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer;