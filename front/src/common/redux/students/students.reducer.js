import {
  STUDENT_COMPLETED_REG,
  STUDENT_REG_LOGICAL_ERROR_HAPPENED,
  REG_STUDENT_FAILED,
} from './types';

const initialState = {
  isRegistered: false,
};

export function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case STUDENT_COMPLETED_REG:
      return { ...state, isRegistered: true };
    case REG_STUDENT_FAILED:
      return { ...state, isRegistered: false };
    case STUDENT_REG_LOGICAL_ERROR_HAPPENED:
      return { ...state, isRegistered: false };
    default:
      return state;
  }
}
