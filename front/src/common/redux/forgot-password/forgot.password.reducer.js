import * as types from './types';

const initialState = {
    isMailSent: false,
    message:''
}

export function forgotPassword (state = initialState, action) {
    switch(action.type) {
        case types.FORGOT_PASSWORD_SUCCESS:
            return {...state, isMailSent: true, message: 'User password change request is made. Check your mail for further instructions'};
        case types.FORGOT_PASSWORD_ERROR:
            return {...state, isMailSent: false, message:'Please enter correct email'};
        default:
            return state;
    }
}
