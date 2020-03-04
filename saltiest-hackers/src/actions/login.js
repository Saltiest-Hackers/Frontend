import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from 'axios';

export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR';

export const getLogin = (user, props) => dispatch => {
    axios.post('https://saltiest-hacker-news-trolls.herokuapp.com/api/user/login', user)
    .then( res => {
        dispatch({type: FETCH_LOGIN_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token)
        props.history.push('/feed')
    })
    .catch( error => {
        dispatch({type: FETCH_LOGIN_ERROR, payload: error})
    })
}