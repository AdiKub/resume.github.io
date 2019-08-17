import React from 'react'

import './styles.scss'

import user from '../../assets/images/me_img.png'
import userBackground from '../../assets/images/me_background_img.png'



const GeneralInfo = (props) => {
	const { generalInfo } = props
	const generalInfoContents = generalInfo.generalInfo
	return (
		<div className='general-info'>
	    <div className='general-info-content'>
				<div className='general-info-wrapper'>
					<h4 className='general-info-wrapper_title'>EDUCATION</h4>
					{Object.keys(generalInfoContents.EDUCATION).map(key =>
						<span key={key}>
							{generalInfoContents.EDUCATION[key]}
						</span>
					)}
				</div>
				<div className='general-info-wrapper'>
					<h4 className='general-info-wrapper_title'>TECHNICAL SKILLS</h4>
					{Object.keys(generalInfoContents.TECHNICAL_SKILLS).map(key =>
						<div className='general-info-wrapper_subtitle' key={key}>
							<span className='general-info_skill_name'>
								{key}
							</span> 
							<br/>
							{generalInfoContents.TECHNICAL_SKILLS[key].map(key2 =>
								<span key={key2}>
									{key2 + ', '}
								</span>
							)}
						</div>
					)}
				</div>
				<div className='general-info-wrapper'>
					<h4 className='general-info-wrapper_title'>LANGUAGES</h4>
					{generalInfoContents['LANGUAGES'].map(key =>
						<span key={key} className='general-info_text'>
							{key}
						</span>
					)}
				</div>
				<div className='general-info-wrapper'>
					<h4 className='general-info-wrapper_title'>ADDITIONAL EDUCATION</h4>
					{Object.keys(generalInfoContents.ADDITIONAL_EDUCATION).map(key =>
						<span key={key}>
							{generalInfoContents.ADDITIONAL_EDUCATION[key]}
						</span>
					)}
				</div>
			</div>
			<div className='general-info-image'>
					<img  
						className='general-info-image_user_background' 
						src={userBackground} 
						alt='user'></img>
					<img  
						className='general-info-image_user_img' 
						src={user} 
						alt='user'></img>

			</div>
		</div>
	)
}

export default GeneralInfo;