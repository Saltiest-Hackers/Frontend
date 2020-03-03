import React, { useState, useEffect } from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';

const useStyles = makeStyles({
    title: {
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
    const sortBySaltiness = () => {
        const newArr = [ ...data ];
        newArr.sort((a, b) => {
            if (a.saltiness > b.saltiness) {
                return 1;
            }
            else if (a.saltiness < b.saltiness) {
                return -1;
            }
            return 0;
        });
        setDisplay(newArr);
    }
    return (
        <React.Fragment>
            <Typography variant='h4' className={classes.title}>Comment Feed</Typography>
            <Button variant='contained' onClick={() => sortBySaltiness()}>Sort</Button>
            {display.map((comment, index) => {
                return (
                    <Comment key={index} comment={comment} />
                )
            })}
        </React.Fragment>
    )
}

export default Feed;