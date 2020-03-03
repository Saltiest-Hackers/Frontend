import React from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = (props) => {
    // create history object so we can use it to change pages on submit
    const history = useHistory();
    // pull form methods from useForm
    const { register, handleSubmit } = useForm();
    // submission function
    const onSubmit = (values) => {
        console.log(values);
        history.push('/feed');
    }
    return (
        <Dialog open={props.open}>
            <DialogTitle id='form-dialog-title'>Register</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label='Username' 
                            variant='outlined' 
                            fullWidth={true}
                            margin='normal' 
                            autoComplete='username'
                            name='username'
                            inputRef={register}
                    />
                    <TextField label='Password' 
                            type='password' 
                            variant='outlined' 
                            fullWidth={true} 
                            margin='normal' 
                            autoComplete='new-password'
                            name='password'
                            inputRef={register}
                    />
                    <Button variant='outlined' type='submit'>Register</Button>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Register;