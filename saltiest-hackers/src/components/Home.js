import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import Login from './Login';
import Register from './Register';

const Home = () => {
    const [loginOpen, setLoginOpen ] = useState(false);
    const [registerOpen, setRegisterOpen ] = useState(false);
    return (
        <React.Fragment>
            <h1>Saltiest Hackers</h1>
            <Button onClick={() => setLoginOpen(true)}>Login</Button>
            <Button onClick={() => setRegisterOpen(true)}>Register</Button>
            <Login open={loginOpen} opener={setLoginOpen} />
            <Register open={registerOpen} opener={setRegisterOpen} />
        </React.Fragment>    
    )
}

export default Home;