import React from 'react';

import logo from '../../assets/img/logo.png';

import classes from './Header.module.scss';

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;
