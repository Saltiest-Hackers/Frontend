import React, { useState, useEffect } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';
import Filters from './Filters.js';
import axios from 'axios';

const useStyles = makeStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    },
    error: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%'
    }
})

const Feed = () => {
    const [data, setData] = useState([]);
    const [display, setDisplay] = useState([]);
    const classes = useStyles();
    // axios call to populate state with data from database
    useEffect(() => {
        axios.get('https://hn-saltiness.herokuapp.com/topcomments')
             .then((response) => setData(response.data))
             .catch((error) => console.error(error))
    }, []);
    // useEffect to update the display to match most recently called data
    useEffect(() => {
        setDisplay(data);
    }, [data])
    return (
        <React.Fragment>
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