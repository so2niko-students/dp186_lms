import {
  STUDENT_COMPLETED_REG,
  STUDENT_REG_LOGICAL_ERROR_HAPPENED,
  REG_STUDENT_FAILED,
} from './types';

const initialState = {
  isRegistered: false,
  isFormSended: false,
  errorMessage: '',
};

export function studentsReducer(state = initialState, action) {
  const { email } = action;
  const { error } = action;
  switch (action.type) {
    case STUDENT_COMPLETED_REG:
      return { ...state, isFormSended: true, isRegistered: true, email };
    case REG_STUDENT_FAILED:
      return { ...state, errorMessage: error, isRegistered: false, isFormSended: true };
    case STUDENT_REG_LOGICAL_ERROR_HAPPENED:
      return {
        ...state,
        errorMessage: error,
        isFormSended: true,
        isRegistered: false,
      };
    default:
      return state;
  }
}
