import React from 'react'

import ExperienceNavigator from '../ExperienceNavigator'
import ExperienseDisplay from '../ExperienseDisplay'
import './styles.scss'


const Experiense = () => {

    return (
        <div className='experiense'>
            <ExperienseDisplay/>
            <ExperienceNavigator/>
        </div>
    )
}

export default Experiense;