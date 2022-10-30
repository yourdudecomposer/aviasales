import classes from './Header.module.scss';
import React from 'react';
import logo from '../../assets/img/logo.png'
function Header() {
    return ( <header className={classes['header']}>
        <img src={logo} alt="logo" />
    </header> );
}

export default Header;