import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss'

const ExperienceNavigator = (props) => {
	const {experienseList} = props
	const sortExp = Object.keys(experienseList)
		.sort((a, b)=> experienseList[b].id - experienseList[a].id)
	const show = useSelector(state => state.show)
	const [buttonId, isSelect] = useState('future')
	const [fullExperiense, isShow] = useState(false)
	const dispatch = useDispatch()
	const positions = !show ? sortExp : []

	const setNextDate = () => {
		positions.indexOf(buttonId) > 0 ?
			isSelect(positions[positions.indexOf(buttonId) - 1]) :
			isSelect(positions[positions.length - 1])
	}
	const setPrevDate = () => {
		positions.indexOf(buttonId) < positions.length - 1 ?
			isSelect(positions[positions.indexOf(buttonId) + 1]) :
			isSelect(positions[0])
	}

	useEffect(() => {
		dispatch({ type: 'SHOW_ALL', title: fullExperiense })
		dispatch({ type: 'CHANGE_EXPERIENSE', title: buttonId })
	})

	return (
		<div className='navigator'>
			<span className='navigator-title__text'>experience</span>
			<div className='navigator-buttons'>
				<div onClick={() => setNextDate()} className='navigator__arrow__up'></div>
				<div className='navigator-wrapper'>
					<div id='first' className='navigator-radio'>
						<div 
							onClick={() => isSelect('future')}
							className='navigator-radio__back'>
						</div>
						{buttonId === 'future' &&
							<div className='navigator-radio__front' >
								<span className='navigator-radio__front__text'>{buttonId}</span>
								<div className='navigator-radio__front__point'>	</div>
							</div>}
					</div>
					{positions.map((position) => (
						<div
							key={position}
							className='navigator-wrapper navigator-wrapper_dinamic'>
							<div className='navigator-radio__line'>	</div>
							<div className='navigator-radio'>
								<div
									onClick={(e) => isSelect(e.target.id)}
									id={position}
									className='navigator-radio__back'>
								</div>
								{buttonId === position &&
									<div className='navigator-radio__front' >
										<span className='navigator-radio__front__text'>
											{experienseList[position].period}
										</span>
										<div className='navigator-radio__front__point'>	</div>
									</div>}
							</div>
						</div>
					))}
				</div>
				<div
					onClick={() => setPrevDate()}
					className='navigator__arrow__down'>
				</div>
			</div>
			<span
				onClick={() => isShow(!fullExperiense)} 
				className='navigator-change_text'>
				{fullExperiense ? 'hide all' : 'show all'}
			</span>
		</div>
	)
}
export default ExperienceNavigator