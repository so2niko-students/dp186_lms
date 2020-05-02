import { LOGIN_USER } from './types';

export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    user
});
