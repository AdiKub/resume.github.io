import React, { useState } from 'react'

import './styles.scss'


const ExperienceNavigator = () => {
	const [buttonId, isSelect] = useState('first')
	const dates = ['2012-2013', '2014-2015', '2016-2017', '2017-2018', '2018-']

	return (
		<div className='navigator'>
			<span className='navigator-title__text'>
				experience
        </span>
			<div className='navigator-buttons'>
				<div className='navigator__arrow__up'>
				</div>
				<div className='navigator-wrapper'>

					<div id='first' className='navigator-radio'>
						<div className='navigator-radio__back'>
						</div>
					</div>
					{dates.map((date) => (
						<div key={date} className='navigator-wrapper navigator-wrapper_dinamic'>
							<div className='navigator-radio__line'>
							</div>
							<div className='navigator-radio'>
								<div onClick={(e) => isSelect(e.target.id)} id={date} className='navigator-radio__back'>
								</div>
								{buttonId === date && 
								<div className='navigator-radio__front' >
									<span className='navigator-radio__front__text'>
										1920-1080
                    </span>
									<div className='navigator-radio__front__point'>
									</div>
								</div>}
							</div>
						</div>
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