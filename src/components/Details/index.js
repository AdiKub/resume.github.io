import React from 'react';

import Experiense from "../Experiense";
import GeneralInfo from "../GeneralInfo";
import FullExperiense from '../FullExperiense'
import './styles.scss'

import experiensies from '../../data/experience.json'
import generalInfo from '../../data/generalInfo.json'

const Details = () => {

	return (
		<div className='details'>
			<div className='container'>
				<div className='details-wrapper'>
					<GeneralInfo generalInfo={generalInfo} />
					<Experiense experiense={experiensies} />
				</div>
			</div>
			<FullExperiense experiense={experiensies} />
		</div>
	)
}

export default Details

