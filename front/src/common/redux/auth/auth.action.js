import { LOGIN_USER, CHANGE_USER_PASSWORD, CHANGE_PASSWORD_STATE } from './types';

export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    user
});

export const changePasswordAction = (user) => ({
    type: CHANGE_USER_PASSWORD,
    user
});

export const changeSuccessPasswordAction = (isSuccess) => ({
    type: CHANGE_PASSWORD_STATE,
    isSuccess
});