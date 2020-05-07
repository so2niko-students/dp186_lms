import * as types from './types';

const initialState = {
    isSetPassword: false,
    errMessage:''
}

export function setPassword (state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case types.SET_PASSWORD_SUCCESS:
            return {...state, isSetPassword: true, errMessage:''};
        case types.SET_PASSWORD_ERROR:
            return {...state, isSetPassword: false, errMessage:'Set new password operation is failed'};
        default:
            return state;
    }
}