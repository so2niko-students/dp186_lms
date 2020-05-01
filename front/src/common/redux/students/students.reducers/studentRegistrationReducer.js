import {
  STUDENT_COMPLETED_REGISTRATION,
  STUDENT_REGISTRATION_LOGICAL_ERROR_OCCURREDD,
  REGISTRATION_STUDENT_FAILED,
} from '../students.actions/types';

const initialState = {
  isRegistered: false,
  isFormSended: false,
  errorMessage: '',
};

export function studentRegister(state = initialState, action) {
  const { email } = action;
  const { error } = action;
  console.log(action);
  switch (action.type) {
    case STUDENT_COMPLETED_REGISTRATION:
      return { ...state, isFormSended: true, isRegistered: true, email };
    case REGISTRATION_STUDENT_FAILED:
      return { ...state, errorMessage: error, isRegistered: false, isFormSended: true };
    case STUDENT_REGISTRATION_LOGICAL_ERROR_OCCURREDD:
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
