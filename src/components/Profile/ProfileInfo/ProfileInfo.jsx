import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
        <div className={s.banner}>
            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/3DE2/production/_108624851_garynash.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>

    </div>
    )
}

export default ProfileInfo;