import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    },
})

const SaltiestUsers = () => {
    const classes = useStyles();
    return (
        <Typography variant='h4' component='h1' className={classes.title} >Salt Hall of Fame</Typography>
    )
}

export default SaltiestUsers;