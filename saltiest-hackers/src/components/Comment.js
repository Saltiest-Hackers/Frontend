import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, LinearProgress, Fab, Typography, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import sanitizeHtml from 'sanitize-html-react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { deleteComment } from '../actions/editComment';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    card: {
        padding: '1%',
        margin: '2%',
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
    },
    author: {
        color: 'inherit',
        '&:visited': {
            color: 'inherit',
        },
        '&:hover': {
            color: 'grey',
        }
    }
})

const Comment = (props) => {
    
const onlySubmit = (e) => {
    e.preventDefault()
    console.log('onClick: Active')
    deleteComment(comment.id)

}
    console.log(props)
    const classes= useStyles();
    const comment = props.comment;
    // Format date from python date string to user readable date
    const commentDate = new Date(comment.time * 1000).toDateString().slice(4)
    // Comment saving code

    const saveComment = () => {
        axiosWithAuth()
        .post('https://saltiest-hacker-news-trolls.herokuapp.com/api/comment', comment.id)
        .then(response => console.log(response));
    }
    if (comment.comment_text !== 'NaN') {
        return (
            <Card className={classes.card}>
                <CardContent>
                    
                    <Typography className={classes.title} component='h2'>
                        {/* Only link to user page if not on a user page */}
                        {props.user ? comment.author
                                    : <Link className={classes.author} to={`/commenter/${comment.author}`}>{comment.author}</Link>
                        }
                    </Typography>
                    <Typography>
                        Saltiness: {parseFloat((comment.saltiness * 100).toFixed(1))}%
                    </Typography>
                    <LinearProgress variant='determinate' value={comment.saltiness * 100} />
                    <Typography component='time'>
                        {commentDate}
                    </Typography>
                    <Typography>
                        "{sanitizeHtml(comment.comment_text, {
                            allowedTags: [],
                            allowedAttributes: [],
                        })}"
                    </Typography>
                    {/* Only display the saved icon if the saved prop is present  */}
                    {props.saved ? undefined
                                 : <Fab size='small' aria-label='save' onClick={() => saveComment()}>
                                        <SaveIcon />
                                    </Fab>
                    }
                   
                   <button onClick={ onlySubmit}>Delete</button>
                </CardContent>      
                  
            </Card>
        )
    } else {
        return null;
    }
}

const mapStateToProps = (state) => {
    return ( state )
} 

export default connect( 
    mapStateToProps,
    {deleteComment}
)(Comment);
