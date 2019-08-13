import React from 'react';

import Experiense from "../Experiense";
import GeneralInfo from "../GeneralInfo";
import './styles.scss'



const Details = () => {

    return (
        <div className='details'>
            <div className='container'>
                <div className='details-wrapper'>
                    <GeneralInfo/>
                    <Experiense/>
                </div>
            </div>
        </div>
    )
}

export default Details

