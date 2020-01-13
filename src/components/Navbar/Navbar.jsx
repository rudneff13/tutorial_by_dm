import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";


const Navbar = (props) => {

    let friendElements = props.state.friends.map(f => <FriendItem id={f.id} name={f.name} img={f.img}/>);

    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <br/>
            <div className={s.friendsBlock}>
                Friends
                <div className={s.friends}>
                    {friendElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;