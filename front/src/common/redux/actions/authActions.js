import * as types from './types';

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};
