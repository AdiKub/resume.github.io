import React from 'react'

import ExperienceNavigator from '../ExperienceNavigator'
import ExperienseDisplay from '../ExperienseDisplay'
import './styles.scss'

const Experiense = (props) => {
	const { experiense } = props;

	return (
		<div className='experiense'>
			<ExperienseDisplay experiense={experiense} />
			<ExperienceNavigator experiense={experiense} />
		</div>
	)
}

export default Experiense;