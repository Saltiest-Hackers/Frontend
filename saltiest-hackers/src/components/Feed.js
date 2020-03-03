import React, { useState, useEffect } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';
import Filters from './Filters.js';

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
    const [data] = useState(dummy);
    const [display, setDisplay] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        setDisplay(data);
    }, [data])
    return (
        <React.Fragment>
            <Typography variant='h4' className={classes.title}>Comment Feed</Typography>
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