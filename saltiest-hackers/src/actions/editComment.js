import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

export const deleteComment = (id) => dispatch => {
    console.log(id)
    axiosWithAuth()
    .delete(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment/${id}`)
    .then( res => axiosWithAuth().get(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment`))
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
    console.log(id)
    axiosWithAuth()
        .put(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment/${id}`, updatedComment)
        .then( res => axiosWithAuth().get(`https://saltiest-hacker-news-trolls.herokuapp.com/api/comment`))
        .then(res => dispatch({
            type: EDIT_SUCCESS,
            payload: res.data
        }))
       

        .catch( err => {
            dispatch({
                type: EDIT_FAIL,
                payload: err.respone
            });
        });
};