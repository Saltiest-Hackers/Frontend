import React from 'react';

const Login = () => {
    return (
        <React.Fragment>
            <h2>Login</h2>
            <form>
                <label htmlFor='username'>Username: 
                    <input type='text' name='username' id='username' placeholder='username'/>
                </label>
                <label htmlFor='password'>Password:
                    <input type='password' name='password' id='password' placeholder='password'/>
                </label>
            </form>
        </React.Fragment>
    )
}

export default Login;