import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux'
import { getLogin } from '../actions/login';

const Login = (props) => {
    const history = useHistory();
    const { credentials, setCredentials} = useState({
        username: '',
        password: ''
    })


    const onChange = e => {
       setCredentials({
           ...credentials,
           [e.target.name]: e.target.value
       }) 
    }

    const onSubmit = e => {
        e.preventDefault()
        props.getLogin(credentials, props);

    }

    return (
        <Dialog open={props.open} onSubmit={onSubmit}>
            <DialogTitle id='form-dialog-title'>Login</DialogTitle>
            <DialogContent>
                <TextField label='Username' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='username' 
                           onChange={onChange}
                           value={props.username}
                />
                <TextField label='Password' 
                           type='password' 
                           variant='outlined' 
                           fullWidth='true' 
                           margin='normal' 
                           autocomplete='current-password'
                           onChange={onChange}
                           value={props.passowrd} 
                />
            </DialogContent>
            <DialogActions>
                <Button onSubmit={onSubmit} onClick={() => onSubmit}>Login</Button>
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getLogin})(Login);