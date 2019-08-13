import React, { useState } from 'react'

import './styles.scss'


const ExperienceNavigator = () => {
	const [chnumber, isOpenww] = useState(2)
	console.log(chnumber)
	return (
		<div className='navigator'>
			<span className='navigator-title__text'>
				experience
        </span>
			<div className='navigator-buttons'>
				<div className='navigator__arrow__up'>
				</div>
				<div className='navigator-wrapper'>

					<div id='0' className='navigator-radio'>
						<div className='navigator-radio__back'>
						</div>
					</div>
					{[1, 2, 3, 4, 5].map((elem, index) => (
						<>
							<div className='navigator-radio__line'>
							</div>
							<div className='navigator-radio'>
								<div onClick={(e) => isOpenww(e.target.id)} id={index + 1} className='navigator-radio__back'>
								</div>
								{chnumber === elem + 1 &&
									<div className='navigator-radio__front'>
										<span className='navigator-radio__front__text'>
											1920-1080
                    </span>
										<div className='navigator-radio__front__point'>
										</div>
									</div>}
							</div>
						</>
					))}

				</div>
				<div className='navigator__arrow__down'>
				</div>
			</div>
			<span className='navigator-change_text'>
				show all
        </span>
		</div>
	)
}
export default ExperienceNavigator