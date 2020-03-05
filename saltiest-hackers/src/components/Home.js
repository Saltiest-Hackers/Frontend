import React, { useState } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import Login from './Login';
import Register from './Register';

import background from '../assets/background.jpg'

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        color: 'white',
        paddingTop: '8%',
    },
    buttons: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '3%',
    },
    background: {
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center center',
        margin: '0 -2.7% -2%',
    },
})

const Home = (props) => {
    const [loginOpen, setLoginOpen ] = useState(false);
    const [registerOpen, setRegisterOpen ] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Typography variant='h2' className={classes.title}>Saltiest Hackers</Typography>
            <div className={classes.buttons}>
                <Button variant='contained' className={classes.button} onClick={() => setLoginOpen(true)}>Login</Button>
                <Button variant='contained' className={classes.button} onClick={() => setRegisterOpen(true)}>Register</Button>
            </div>
            <Login open={loginOpen} opener={setLoginOpen} {...props}/>
            <Register open={registerOpen} opener={setRegisterOpen} {...props}/>
        </div>    
    )
}

export default Home;