import { REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/register';

const initialState = {
    user: {
        username: '',
        password: ''
    },
    error: null
}

export const registerReducer = (state= initialState, action) => {

    switch(action.type){

        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.payload
            }

            default:
                return state;

    }

} 