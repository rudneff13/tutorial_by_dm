import React from 'react';
import s from './FriendItem.module.css'


const FriendItem = (props) => {

    return (

        <div className={s.friends}>
            <img src={props.img}/>
        </div>
    );
}

export default FriendItem;