import React from 'react'
import { useSelector } from 'react-redux';

import './styles.scss'

const FullExperiense = (props) => {
	const experienseList = useSelector(state => state.resume["experiense"])
	const doYouWantSeeAll = useSelector(state => state.show)
	const experienseListArray = Object.keys(experienseList)
		.sort((a, b)=> experienseList[b].id - experienseList[a].id)
	const isRevers = (index) => index % 2 === 0
	
	return (
		<>
			{doYouWantSeeAll && experienseListArray.map((position, index) =>
				<div key={position} className='full-experiense'>
					<div className='container'>
						<div className={isRevers(index) ?
							'full-experiense-wrapper' :
							'full-experiense-wrapper full-experiense-strip_revers'}>
							<div className={isRevers(index) ?
								'full-experiense-strip' :
								'full-experiense-strip full-experiense-strip_revers'} >
								{position}
							</div>
							<div className='full-experiense-content'>
								<div className={isRevers(index) ?
									'full-experiense-content-box' :
									'full-experiense-content-box full-experiense-content-box_revers'} >
									<div className={isRevers(index) ?
										'full-experiense-content-display' :
										'full-experiense-content-display full-experiense-content-display_revers'}>
										<p className='full-experiense-content-display__position' >
											period:
											<span className='full-experiense-content-display__position__name'>
												{experienseList[position].period}
											</span>
										</p>
										<p className='full-experiense-content-display__position' >
											Place:
											<span className='full-experiense-content-display__position__name'>
												{experienseList[position].place}
											</span>
										</p>
										<p className='full-experiense-content-display__position' >
											responsibillity:
											{experienseList[position].responsibillity.map(key =>
												<span
													key={key}
													className='full-experiense-content-display__position__name'>
													{key}
												</span>
											)}
										</p>
									</div>
									<div className='full-experiense-content-display-images'>
										<img
											className='full-experiense-content-display-images__image'
											src={process.env.PUBLIC_URL + 'images/' + experienseList[position].images}
											alt={position.images} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default FullExperiense