import React from 'react';
import nnn from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={nnn.nav}>
            <div className={nnn.item}>
                <a>Profile</a>
            </div >
            <div className={nnn.item}>
                <a>Messages</a>
            </div>
            <div className={nnn.item}>
                <a>News</a>
            </div>
            <div className={nnn.item}>
                <a>Music</a>
            </div>
            <div className={nnn.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}

export default Navbar
