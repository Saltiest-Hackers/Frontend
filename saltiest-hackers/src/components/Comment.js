import React from 'react';
import { Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        minWidth: 800,
        padding: '1%',
        margin: '2%',
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
    }
})

const Comment = (props) => {
    const classes= useStyles();
    const comment = props.comment;
    return (
        <Card className={classes.card}>
            <Typography className={classes.title}>
                {comment.username}
            </Typography>
            <Typography>
                {comment.saltiness}
            </Typography>
            <Typography>
                {comment.comment}
            </Typography>
        </Card>
    )
}

export default Comment;