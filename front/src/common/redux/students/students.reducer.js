import {
  STUDENT_COMPLETED_REGISTER,
  STUDENT_REGISTER_ERROR_HAPPENED,
  REGISTER_STUDENT_FAILED,
} from './types';

const initialState = {
  isRegistered: false,
};

export function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case STUDENT_COMPLETED_REGISTER:
      return { ...state, isRegistered: true };
    case REGISTER_STUDENT_FAILED:
      return { ...state, isRegistered: false };
    case STUDENT_REGISTER_ERROR_HAPPENED:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
}
