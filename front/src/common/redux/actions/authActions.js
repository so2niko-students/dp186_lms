import { LOGIN_USER } from './types';

export const loginUserAction = (user) => {
  return {
    type: LOGIN_USER,
    user
  }
};
