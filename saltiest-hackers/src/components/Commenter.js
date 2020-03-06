import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Backdrop, CircularProgress, Typography, makeStyles } from '@material-ui/core';

import Comment from './Comment';

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%',
        marginBottom: '5%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    backdropError: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#f00',
    },
}));

const Commenter = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noLoad, setNoLoad] = useState(false);
    const { id } = useParams();
    // Get data for individual commenter
    // https://hn-saltiness.herokuapp.com/user/${id}
    useEffect(() => {
        setLoading(true);
        axios.get(`https://hn-saltiness.herokuapp.com/user/${id}`)
             .then((response) => {
                 setData(response.data);
                 setLoading(false);
                })
             .catch((error) => {
                 console.error(error)
                 setNoLoad(true)
                })
    }, [id]);
    const classes = useStyles();
    return(
        <React.Fragment>
            <Backdrop open={loading} className={noLoad ? classes.backdropError : classes.backdrop}>
                {noLoad ? <Typography>Error loading! Please reload</Typography>
                        : <CircularProgress />
                }
            </Backdrop>
            <Typography variant='h4' component='h1' className={classes.title} >Profile  for {id}</Typography>
            {data.map((comment, index) => {
                return (
                    <Comment key={index} comment={comment} user/>
                )
            })}
        </React.Fragment>
    )
}

export default Commenter;