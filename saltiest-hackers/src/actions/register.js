import { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from 'axios';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const getRegister = (user, props) => dispatch => {
    axios.post('https://saltiest-hacker-news-trolls.herokuapp.com/api/user/register', user)
    .then( res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token)
        props.history.push('/feed')
    })
    .catch( error => {
        dispatch({type: REGISTER_ERROR, payload: error})
    })
}