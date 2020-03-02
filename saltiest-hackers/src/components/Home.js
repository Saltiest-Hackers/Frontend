import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <h1>Saltiest Hackers</h1>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </React.Fragment>
        )
}

export default Home;