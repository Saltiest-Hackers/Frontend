import React from 'react';

const Register = () => {
    return (
        <React.Fragment>
            <h2>Register</h2>
            <form>
                <label htmlFor='new-username'>Username:
                    <input type='text' id='new-username' name='new-username' placeholder='username' /> 
                </label>
                <label htmlFor='new-password'>Password:
                    <input type='password' id='new-password' name='new-password' placeholder='password' />
                </label>
            </form>
        </React.Fragment>
    )
}

export default Register;