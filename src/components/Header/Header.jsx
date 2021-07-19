import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return <header className={h.header}>
        <img src="https://www.designevo.com/images/home/2-5-0/blue-shield-and-banner-emblem.webp" className={h.img} alt="logo" />
        {/*<div className="header_text">
            Social network
        </div>*/}
    </header>
}

export default Header;