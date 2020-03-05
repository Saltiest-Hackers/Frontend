
import axios from 'axios';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const getRegister = (user, props) => dispatch => {
    console.log(user)
    axios.post('https://saltiest-hacker-news-trolls.herokuapp.com/api/user/register', user)
    .then( res => {
        console.log(res)
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token)
        
    })
    .catch( error => {
        dispatch({type: REGISTER_ERROR, payload: error})
    })
}