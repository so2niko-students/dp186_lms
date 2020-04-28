import * as types from '../actions/types';

const initialState = {
  isLogin: false,
  errorMessage: '',
};

export function login(state = initialState, action) {
  
  const { response } = action;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      if(response) {
        if (response.token) {
          return { ...state, isLogin: true, errorMessage: '' };
        } else if (response.error) {
          return { ...state, isLogin: false, errorMessage: response.error };
        } else if(response.name) {
          return { ...state, isLogin: false, errorMessage: response.name };
        }
      }
      break;
    case types.LOGIN_USER_ERROR:
        return { ...state, isLogin: false, errorMessage: 'You have lost connection' };
    default:
      return {...state};
  }
};
