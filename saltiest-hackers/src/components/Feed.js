import React, { useState, useEffect } from 'react';
import { Backdrop, CircularProgress, Typography, makeStyles } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';
import Filters from './Filters.js';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    },
    error: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    backdropError: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#f00',
    },
}))

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const [noLoad, setNoLoad] = useState(false);
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);
    const classes = useStyles();
    // axios call to populate state with data from database
    useEffect(() => {
        setLoading(true);
        axios.get('https://hn-saltiness.herokuapp.com/topcomments')
             .then((response) => {
                 setData(response.data)
                 setLoading(false);
                })
             .catch((error) => {
                 console.error(error)
                 setNoLoad(true)
                })
    }, []);
    // useEffect to update the display to match most recently called data
    useEffect(() => {
        setDisplay(data);
    }, [data])
    return (
        <React.Fragment>
            <Backdrop open={loading} className={noLoad ? classes.backdropError : classes.backdrop}>
                {noLoad ? <Typography>Error loading! Please reload</Typography>
                        : <CircularProgress />
                }
            </Backdrop>
            <Typography variant='h4'component='h1' className={classes.title}>Comment Feed</Typography>
            <Filters data={data} display={display} setDisplay={setDisplay} />
            {display.length > 0 ? undefined : <h1 className={classes.error}>No matches</h1>}
            {display.map((comment, index) => {
                return (
                    <Comment key={index} comment={comment} />
                )
            })}
        </React.Fragment>
    )
}

export default Feed;