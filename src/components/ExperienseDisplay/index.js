import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss'
import experiense from  '../../data/experience.json'

const ExperienseDisplay = () => {
	const selectedExperiense =  useSelector( state => state.setExperiense )
		const experienseList = experiense.experiense;
		const position = experienseList[selectedExperiense]
    
		if (position) {
			return (
        <div className='experiense-display'>
          <div className='experiense-display-content'>
            <p className='experiense-display__position' >
              Position:
              <span className='experiense-display__position__name'>
                {selectedExperiense}
              </span>
            </p>
            <p className='experiense-display__position' >
              Place:
              <span className='experiense-display__position__name'>
                {position.place}
              </span>
            </p>
            <p className='experiense-display__position' >
              responsibillity:
              {position.responsibillity.map(key=>
                <span key={key} className='experiense-display__position__name'>
                  {key}
                </span>
              )}
            </p>
          </div>
          <div className='experiense-display-images'>
						<img 
							className='experiense-display-images__image' 
							src={process.env.PUBLIC_URL + 'images/'+ position.images} 
							alt={position.images} />
          </div>
        </div>
    )
		} else {
			return (
				<div className='experiense-display'>
					<div className='experiense-display-content'>
						<p className='experiense-display__position' >
							your company could be here
						</p>
				</div>
		</div>
			)
		}
    
}

export default ExperienseDisplay;