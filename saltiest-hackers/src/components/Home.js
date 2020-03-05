import React, { useState } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import Login from './Login';
import Register from './Register';

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
    }
})

const Home = () => {
    const [loginOpen, setLoginOpen ] = useState(false);
    const [registerOpen, setRegisterOpen ] = useState(false);
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant='h2' className={classes.title}>Saltiest Hackers</Typography>
            <div className={classes.buttons}>
                <Button variant='contained' className={classes.button} onClick={() => setLoginOpen(true)}>Login</Button>
                <Button variant='contained' className={classes.button} onClick={() => setRegisterOpen(true)}>Register</Button>
            </div>
            <Login open={loginOpen} opener={setLoginOpen} />
            <Register open={registerOpen} opener={setRegisterOpen} />
        </React.Fragment>    
    )
}

export default Home;