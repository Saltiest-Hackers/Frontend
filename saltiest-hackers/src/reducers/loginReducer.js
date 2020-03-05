import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from '../actions/login';

const initialState = {
    user: {
        username: '',
        password: ''
    },
    error: null
}

export const loginReducer = (state= initialState, action) => {

    switch(action.type){

        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case FETCH_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }

            default:
                return state;

    }

} 