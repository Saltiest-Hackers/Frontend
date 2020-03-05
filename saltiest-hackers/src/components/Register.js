import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { getRegister } from '../actions/register';

const Register = (props) => {
    // create history object so we can use it to change pages on submit

    // pull form methods from useForm
    const { register, errors } = useForm();


    const [ newUser, setNewUser ] = useState({
        username: '',
        password: ''
    })

    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const onlySubmit = e => {
        console.log(newUser)
        e.preventDefault();
        props.getRegister(newUser, props);
        props.history.push('/feed')
    }

    return (
        <Dialog open={props.open}>
            <DialogTitle id='form-dialog-title'>Register</DialogTitle>
            <DialogContent>
                <form onSubmit={onlySubmit}>
                    <TextField label='Username' 
                            variant='outlined' 
                            fullWidth={true}
                            margin='normal' 
                            autoComplete='username'
                            name='username'
                            inputRef={register({ required: true })}
                            error={errors.username ? true : false }
                            helperText={errors.username ? 'Username required' : " " }
                            value={props.setNewUser}
                            onChange={onChange}
                    />
                    <TextField label='Password' 
                            type='password' 
                            variant='outlined' 
                            fullWidth={true} 
                            margin='normal' 
                            autoComplete='new-password'
                            name='password'
                            inputRef={register({ required: true })}
                            error={errors.password ? true : false }
                            helperText={errors.password ? 'Password required' : " " }
                            value={props.setNewUser}
                            onChange={onChange}
                    />
                    <Button variant='outlined' type='submit' onSubmit={onlySubmit}>Register</Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default connect(
    null, 
    {getRegister}
) (Register);