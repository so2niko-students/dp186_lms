import { REGISTRATION_STUDENT_SUCCESS, NOT_UNIQUE_EMAIL, GROUP_NOT_FOUND } from '../actions/types';

const initialState = {
  firstNameEngValid: false,
  isRegistered: 'registration',
};

export function studentRegister(state = initialState, action) {
  const { response } = action;

  switch (action.type) {
    // case REGISTER_STUDENT:
    //   return { ...state, response };
    case REGISTRATION_STUDENT_SUCCESS:
      if (response.ok) {
        return { ...state, response, isRegistered: true };
      } else {
        return { ...state, response, isRegistered: false };
      }
    case NOT_UNIQUE_EMAIL:
      return { ...state, response, isRegistered: false, reason: 'email' };
    case GROUP_NOT_FOUND:
      return { ...state, response, isRegistered: false, reason: 'group' };
    default:
      return state;
  }
}
