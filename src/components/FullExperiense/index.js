import React from 'react'
import './styles.scss'

const FullExperiense = (props) => {
	const { experiense } = props
	const experienseList = experiense.experiense
	const experienseListArray = Object.keys(experienseList)

	const isLeft = (index) => (
		index % 2 === 0
	)
	console.log(isLeft(4))
	
  return (
		<div>
			{experienseListArray.map((position, index) => 	
			<div key={position} className='full-experiense'>
				<div className='full-experiense-wrapper'>
				<div className='full-experiense-strip' >
					{position}
				</div>
				<div className='full-experiense-content'>
					<div className='full-experiense-content-box'>
						<div className='full-experiense-content-display'>
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
							  {experienseList[position].responsibillity.map(key=>
									<span key={key} className='full-experiense-content-display__position__name'>
										{key}
									</span>
								)} 
							</p>
						</div>
						<div className='full-experiense-content-display-images'>
							<img 
								className='full-experiense-content-display-images__image' 
								src={process.env.PUBLIC_URL + 'images/'+ experienseList[position].images} 
								alt={position.images} />
          	</div>
					</div>
				</div>
			</div>
			</div>
			)}
		
		</div>
  )
}

export default FullExperiense