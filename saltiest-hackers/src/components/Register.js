import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { getRegister } from '../actions/register';

const Register = (props) => {
    const history = useHistory();
    const { newUser, setNewUser } = useState({
        username: '',
        password: ''
    })

    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        props.getRegister(newUser, props);
    }

    return (
        <Dialog open={props.open}>
            <DialogTitle id='form-dialog-title'>Register</DialogTitle>
            <DialogContent>
                <TextField label='Username' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='username'
                />
                <TextField label='Password' 
                           type='password' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='new-password'
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => history.push('/feed')}>Register</Button>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Register;