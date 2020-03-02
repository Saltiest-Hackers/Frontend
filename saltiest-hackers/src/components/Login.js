import React from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const history = useHistory();
    return (
        <Dialog open={props.open}>
            <DialogTitle id='form-dialog-title'>Login</DialogTitle>
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
                           autocomplete='current-password' 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => history.push('/feed')}>Login</Button>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login;