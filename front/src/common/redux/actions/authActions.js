import * as types from './types';

export const loginUserAction = (user) => {
  console.log('AUTH ACTION');
  console.log(user);

  return {
    type: types.LOGIN_USER,
    user
  }
};
