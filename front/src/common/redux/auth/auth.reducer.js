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
