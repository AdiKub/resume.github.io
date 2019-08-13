import React from 'react';

import Experiense from "../Experiense";
import GeneralInfo from "../GeneralInfo";
import './styles.scss'



const Details = () => {

    return (
        <div className='details'>
            <div className='container'>
                <div className='details-wrapper'>
                    <Experiense/>
                    <GeneralInfo/>
                </div>
            </div>
        </div>
    )
}

export default Details

