import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: '#5f5f5f',
    },
    logo: {
        fontSize: '1.8rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
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
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
        }
    },
}))

const Nav = (props) => {
    const classes = useStyles();
    return (
        <AppBar className={classes.navBar} position='sticky'>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.logo}>🧂 Salty Hackers</Typography>
                <nav className={classes.nav}>
                    <Link className={classes.navLink} to='/feed'>Home</Link>
                    <Link className={classes.navLink} to='/saved'>Saved</Link>
                    <Link className={classes.navLink} to='/saltiest'>Saltiest Users</Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;