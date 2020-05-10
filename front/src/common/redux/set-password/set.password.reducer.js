import * as types from './types';

const initialState = {
    isSetPassword: false,
    errorMessage:''
}

export function setPassword (state = initialState, action) {
    switch(action.type) {
        case types.SET_PASSWORD_SUCCESS:
            return {...state, isSetPassword: true, errorMessage:''};
        case types.SET_PASSWORD_ERROR:
            return {...state, isSetPassword: false, errorMessage:'Set new password operation is failed'};
        default:
            return state;
    }
}