import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import Experiense from "../Experiense";
import GeneralInfo from "../GeneralInfo";
import FullExperiense from '../FullExperiense'

const Details = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		const fireDb = window.firebase.database();
		fireDb.ref().on('value', (snapshot, err) => {
			if (err) {console.error(err)} 
			else {
				dispatch({ type: 'SET_RESUME', title: snapshot.val() }) 
			}
		})
	});

	return (
		<div className='details'>
			<div className='container'>
				<div className='details-wrapper'>
					<GeneralInfo />
					<Experiense />
				</div>
			</div>
			<FullExperiense />
		</div>
	)
}

export default Details

