import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    },
}));

const Commenter = (props) => {
    const classes = useStyles();
    const { id } = useParams();
    return(
        <React.Fragment>
            <Typography variant='h4' component='h1' className={classes.title} >Commenter history for {id}</Typography>
        </React.Fragment>
    )
}

export default Commenter;