import React from 'react'
import { useSelector } from 'react-redux';

import ExperienceNavigator from '../ExperienceNavigator'
import ExperienseDisplay from '../ExperienseDisplay'
import './styles.scss'

const Experiense = () => {
	const experienseList = useSelector(state => state.resume["experiense"])

	return (
		<div className='experiense'>
			<ExperienseDisplay experienseList={experienseList} />
			<ExperienceNavigator experienseList={experienseList} />
		</div>
	)
}

export default Experiense;