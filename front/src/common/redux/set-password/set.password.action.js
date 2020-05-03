import { SET_PASSWORD } from './types';

export const setPasswordAction = (user) => ({
    type: SET_PASSWORD,
    user
});