import React from 'react';
import s from './../Dialogs.module.css'

const AvatarItem = (props) => {

    return (
        <div className={s.avatarItems}>
            <img src={props.img} />
        </div>
    )
};

export default AvatarItem;