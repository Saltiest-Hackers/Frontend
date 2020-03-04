import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, withTheme } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    logo: {
        fontSize: '1.8rem',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        fontSize: '1.2rem',
    },
})

const Nav = (props) => {
    const classes = useStyles();
    return (
        <AppBar position='sticky'>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logo}>🧂 Salty Hackers</Typography>
                <nav className={classes.nav}>
                    <NavLink className={classes.navLink} to='/feed'>Home</NavLink>
                    <NavLink className={classes.navLink} to='/saved'>Saved</NavLink>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;