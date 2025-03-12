import React from 'react';
import Logo from './Logo/Logo';
import DarkModeToggle from './DarkModeToggle';
import Navigation from './Navigation';
import { Grid2 } from '@mui/material';

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }} className="p-3 ">
            <Grid2 container width="100%"> 
                <Grid2 size={{ xs: 12, md: 2 }}  alignContent={{ xs: 'center' }} textAlign={{xs: "center"}} justifyItems={{ xs: 'flex-start', s: 'center' }}>
                    <Logo />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 8 }}  alignContent={{ xs: 'center' }} justifyItems={{ xs: 'center' }}>
                    <Navigation />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 2 }}  alignContent={{ xs: 'center' }} textAlign={{xs: "center"}} justifyItems={{ xs: 'flex-end', md: 'center' }}>
                <DarkModeToggle />
                </Grid2>
            </Grid2>

        </header>
    );
}

export default Header;