import * as types from './types';

const initialState = {
    isLoggedIn: false,
    errorMessage: '',
};

export function login(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return { ...state, isLoggedIn: true, errorMessage: '' };
        case types.LOGIN_SERVER_ERROR:
            return { ...state, isLoggedIn: false, errorMessage: 'Wrong email or password' };
        default:
            return { ...state };
    }
};

const changePasswordState = {
    isChangedPassword: false,
    errorMessage: '',
}

export function changePassword(state = changePasswordState, action) {
    switch (action.type) {
        case types.CHANGE_USER_PASSWORD_SUCCESS:
            return { ...state, isChangedPassword: true, errorMessage: '' };
        case types.CHANGE_PASSWORD_STATE:
            return { ...state, isChangedPassword: false, errorMessage: '' };
        case types.CHANGE_USER_PASSWORD_ERROR:
            return { ...state, isChangedPassword: false, errorMessage: 'Password has not been changed' };
        default:
            return { ...state };
    }
};
