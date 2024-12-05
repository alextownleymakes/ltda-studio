import React from 'react';
import Logo from './Logo/Logo';
import DarkModeToggle from './DarkModeToggle';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} className="p-3 ">
            <Logo />
            <Navigation />
            <DarkModeToggle />
        </header>
    );
}

export default Header;