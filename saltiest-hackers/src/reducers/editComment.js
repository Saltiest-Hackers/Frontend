import {DELETE_SUCCESS, DELETE_ERROR, EDIT_SUCCESS, EDIT_FAIL} from '../actions/editComment';
const initialState = {

    data: [],
    errot: null

}

export const postingReducer = ( state = initialState, action ) => {

    switch(action.type){
        case EDIT_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case EDIT_FAIL:
            return {
                ...state,
                data: action.payload
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case DELETE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}