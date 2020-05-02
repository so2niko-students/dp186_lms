import {
  TEACHER_COMPLETED_REG,
  TEACHER_REG_LOGICAL_ERROR_HAPPENED,
  REG_TEACHER_FAILED,
  SHOW_TEACHER_REGISTERED_MODAL,
  HIDE_TEACHER_REGISTERED_MODAL,
  HIDE_TEACHER_RESPONSE_MODAL,
} from './types';

const initialState = {
  isFormSended: false,
  isRegistrationModalVisible: false,
  isResponseModalVisible: false,
  isRegistered: false,
  errorMessage: '',
};

export function teachersReducer(state = initialState, action) {
  const { email } = action;
  const { error } = action;
  switch (action.type) {
    case TEACHER_COMPLETED_REG:
      return { ...state, isFormSended: true, isRegistered: true, email };
    case TEACHER_REG_LOGICAL_ERROR_HAPPENED:
      return {
        ...state,
        errorMessage: error,
        isFormSended: true,
        isRegistered: false,
        isResponseModalVisible: true,
      };
    case SHOW_TEACHER_REGISTERED_MODAL:
      return { ...state, isRegistrationModalVisible: true };
    case HIDE_TEACHER_REGISTERED_MODAL:
      return { ...state, isRegistrationModalVisible: false };
    case HIDE_TEACHER_RESPONSE_MODAL:
      return { ...state, isResponseModalVisible: false };
    case REG_TEACHER_FAILED:
      return {
        ...state,
        errorMessage: error,
        isRegistered: false,
        isResponseModalVisible: true,
      };
    default:
      return state;
  }
}
