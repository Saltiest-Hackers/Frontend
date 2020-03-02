import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';

const Register = (props) => {
    return (
        <Dialog open={props.open}>
            <DialogTitle id='form-dialog-title'>Register</DialogTitle>
            <DialogContent>
                <TextField label='username' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='username' 
                />
                <TextField label='password' 
                           type='password' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='new-password' 
                />
            </DialogContent>
            <DialogActions>
                <Button>Login</Button>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Register;