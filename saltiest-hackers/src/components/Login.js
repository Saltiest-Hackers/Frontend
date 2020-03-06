import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import { useForm } from 'react-hook-form';


import { connect } from 'react-redux'
import { getLogin } from '../actions/login';


const Login = (props) => {
    // create history object so we can use it to change pages on submit

    // pull form methods from useForm
    const { register, handleSubmit, errors } = useForm();

    const [credentials, setCredentials] = useState({
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
        // e.preventDefault()
        console.log(credentials)
        props.getLogin(credentials, props);
        props.history.push('/feed')

    }


    return (
        <Dialog open={props.open} onSubmit={onSubmit}>
            <DialogTitle id='form-dialog-title'>Login</DialogTitle>
            <DialogContent>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label='Username' 
                            variant='outlined' 
                            fullWidth={true} 
                            margin='normal' 
                            autoComplete='username'
                            name='username'
                            inputRef={register({ required: true })}
                            error={errors.username ? true : false }
                            helperText={errors.username ? 'Username required' : " " }
                            onChange={onChange}
                            value={credentials.username}
                    />
                    <TextField label='Password' 
                            type='password' 
                            variant='outlined' 
                            fullWidth={true} 
                            margin='normal' 
                            autoComplete='current-password'
                            name='password'
                            inputRef={register({ required: true })}
                            error={errors.password ? true : false }
                            helperText={errors.password ? 'Password required' : " " } 
                            onChange={onChange}
                            value={credentials.password}
                    />
                    <Button type='submit' variant='outlined'>Login</Button>
                </form>
            </DialogContent>
            <DialogActions>    
                      
                <Button onClick={() => props.opener(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {getLogin})(Login);