import axios from 'axios';

export const axiosWithAuth = () => {

    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseUrl: 'https://saltiest-hacker-news-trolls.herokuapp.com/api/user/login'
    });

};