import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
    return <header className={h.header}>
        <img src="https://www.designevo.com/images/home/2-5-0/blue-shield-and-banner-emblem.webp" className={h.img} alt="logo" />
        <div className={h.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}            
        </div>
    </header>
}

export default Header;