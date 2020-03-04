import React from 'react';
import axios from 'axios';
import { Card, CardContent, LinearProgress, Fab, Typography, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
    card: {
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
    // Format date from python date string to user readable date
    const commentDate = new Date(comment.time * 1000).toDateString().slice(4)
    // Comment saving code
    const saveComment = () => {
        axios.post('https://reqres.in/api/users', comment.id)
             .then(response => console.log(response));
    }
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} component='h2'>
                    {comment.author}
                </Typography>
                <Typography>
                    Saltiness: {comment.saltiness * 100}
                </Typography>
                <LinearProgress variant='determinate' value={comment.saltiness * 100} />
                <Typography component='time'>
                    {commentDate}
                </Typography>
                <Typography>
                    "{comment.comment_text}"
                </Typography>
                {/* Only display the saved icon if the saved prop is present  */}
                {props.saved ? undefined
                             : <Fab size='small' aria-label='save' onClick={() => saveComment()}>
                                    <SaveIcon />
                                </Fab>
                }
            </CardContent>        
        </Card>
    )
}

export default Comment;