import React, { useState, useEffect } from 'react';

import { Typography, makeStyles } from '@material-ui/core';

import dummy from '../assets/MOCK_DATA.json'
import Comment from './Comment';
import Filters from './Filters.js';
import axios from 'axios';

const useStyles = makeStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%',
        marginBottom: '5%',
    },
})

const Saved = () => {
    const [display, setDisplay] = useState(dummy);
    // useEffect to take the list of comment IDs stored in the user data and 
    // map over them to create a list of comments in state
    // ---- NOT ACTIVE BECAUSE THERE IS NO LIST OF SAVED IDS YET ----
    // useEffect(() => {
    //     axios.get('https://saltiest-hacker-news-trolls.herokuapp.com/api/saved-comments')
    //          .then((response) => setDisplay(response))
    //          .catch((error) => console.error(error))
    // }, [])
    const classes = useStyles();
    return(
        <React.Fragment>
            <Typography variant='h4' className={classes.title} component='h1'>Saved Comments</Typography>
            <Filters data={display} display={display} setDisplay={setDisplay} />
            {display.length > 0 ? undefined : <h1 className={classes.error}>No Matches</h1>}
            {display.map((comment, index) => {
                return (
                    <Comment key={index} comment={comment} saved/>
                )
            })}
        </React.Fragment>
    )
}

export default Saved;