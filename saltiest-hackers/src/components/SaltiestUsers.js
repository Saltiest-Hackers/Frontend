import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Backdrop, Card, CircularProgress, LinearProgress, Typography, makeStyles } from '@material-ui/core';

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
    users: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    userCard: {
        margin: '0 auto',
        width: '30%',
        padding: '3%',
        marginBottom: '2%',
    },
    author: {
        color: 'inherit',
        '&:visited': {
            color: 'inherit',
        },
        '&:hover': {
            color: 'grey',
        }
    },
}))

const SaltiestUsers = () => {
    const [loading, setLoading] = useState(false);
    const [noLoad, setNoLoad] = useState(false);
    const [data, setData] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        setLoading(true);
        axios.get('https://hn-saltiness.herokuapp.com/topusers')
             .then((response) => {
                 setData(response.data)
                 setLoading(false);
                })
             .catch((error) => {
                 console.error(error)
                 setNoLoad(true)
                })
    }, []);
    return (
        <React.Fragment>
             <Backdrop open={loading} className={noLoad ? classes.backdropError : classes.backdrop}>
                {noLoad ? <Typography>Error loading! Please reload</Typography>
                        : <CircularProgress />
                }
            </Backdrop>
            <Typography variant='h4' component='h1' className={classes.title} >Salt Hall of Fame</Typography>
            <section className={classes.users}>
                {data.map((user, index) => {
                    return (
                        <Card className={classes.userCard}>
                            <Typography>{index + 1}. <Link className={classes.author} to={`/commenter/${user.author}`}>{user.author}</Link></Typography>
                            <Typography>Saltiness: {parseFloat((user.avg_salt * 100).toFixed(1))}%</Typography>
                            <Typography>Number of comments: {user.n_comments}</Typography>
                        </Card>
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default SaltiestUsers;