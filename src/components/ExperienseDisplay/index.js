import React from 'react';

import './styles.scss'
import experiense from  '../../data/experience.json'
import FREELANCE_img from '../../assets/images/FREELANCE_img.png'

const ExperienseDisplay = () => {
    const experienseList = experiense.experiense;
    console.log(experienseList)
		
    return (
        <div className='experiense-display'>
            <div className='experiense-display-content'>
                <p className='experiense-display__position' >
                    Position:
                    <span className='experiense-display__position__name'>
                        {Object.keys( experienseList)[0]}
                    </span>
                </p>
                <p className='experiense-display__position' >
                    Place:
                    <span className='experiense-display__position__name'>
                        {experienseList.FREELANCE.place}
                    </span>
                </p>
                <p className='experiense-display__position' >
                    responsibillity:
                   
                        {experienseList.FREELANCE.responsibillity.map(key=>
                             <span key={key} className='experiense-display__position__name'>
                                 {key}
                             </span>
                            )}
                    
                </p>
            </div>
            <div className='experiense-display-images'>
                <img className='experiense-display-images__image' src={FREELANCE_img} alt={'sd'} />
            </div>
        </div>
    )
}

export default ExperienseDisplay;