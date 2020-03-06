import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const deleteComment = (id, e) => dispatch => {
    console.log(id)
    e.preventDefault()
    axiosWithAuth()
    .delete(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment/${id}`)
    .then( res => dispatch().get(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment/${id}`))
        .then(res => dispatch({
            type: DELETE_SUCCESS,
            payload: res.data
        }))
    .catch( error => {
        dispatch({type: DELETE_ERROR, payload: error.response})
    })
}

export const EDIT_SUCCESS = 'EDIT_SUCECESS';
export const EDIT_FAIL = 'EDIT_FAIL';

export const editComment = (id, updatedComment) => dispatch => {
    axiosWithAuth()
        .put(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment/${id}`, updatedComment)
        .then (res => {
            console.log(res.data);
            dispatch({
                type: EDIT_SUCCESS,
                payload: res.data.
                id
            });
        })

        .catch( err => {
            dispatch({
                type: EDIT_FAIL,
                payload: err.respone
            });
        });
};