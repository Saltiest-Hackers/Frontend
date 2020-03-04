import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>🧂SH</Typography>
                <nav>
                    <NavLink to='/feed'>Home</NavLink>
                    <NavLink to='/saved'>Saved</NavLink>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;