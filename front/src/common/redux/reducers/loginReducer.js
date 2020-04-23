import * as types from '../actions/types';

export default function(state = [], action) {
  // console.log('LOGIN REDUCER')
  // console.log(action)
  
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      // console.log(action)
      // console.log(state)
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      // console.log(response)
      // console.log(state)
      return { ...state, response };
    default:
      return state;
  }
};

