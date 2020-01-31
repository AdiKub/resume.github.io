import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss'


const ExperienseDisplay = (props) => {
  const {experienseList} = props 
  const selectedExperiense = useSelector(state => state.setExperiense)
  const show = useSelector(state => state.show)
  const position = experienseList[selectedExperiense]

  if (!show && position) {
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
              {position.responsibillity.map(key =>
              <span 
                key={key} 
                className='experiense-display__position__name'>
                {key}
              </span>
            )}
          </p>
        </div>
        <div className='experiense-display-images'>
          <img
            className='experiense-display-images__image'
            src={process.env.PUBLIC_URL + 'images/' + position.images}
            alt={position.images} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='experiense-display'>
        <div className='experiense-display-content'>
          <p className='experiense-display__position' >
            <strong>
              your company could be here
            </strong>
					</p>
        </div>
      </div>
    )
  }
}

export default ExperienseDisplay;
