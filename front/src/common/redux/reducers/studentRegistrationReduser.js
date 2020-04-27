import { REGISTRATION_STUDENT, REGISTRATION_STUDENT_ERROR, HIDE_STUDENT_REGISTERED_MODAL } from '../actions/types';

const initialState = {
  firstNameEngValid: false,
  isFormSended: false,
  isModalVisible: false,
  errorMessage: '',
};

export function studentRegister(state = initialState, action) {
  const { response } = action;
  const { error } = action;

  switch (action.type) {
    case REGISTRATION_STUDENT:
      if (response.ok && !response.isJoi) {
        return { ...state, isFormSended: true, isRegistered: true,  };
      } else if (!response.isJoi) {
        return { ...state, errorMessage: response.json.error, isFormSended: true, isRegistered: false, isModalVisible: true };
      } else {
        return { ...state, errorMessage: response.json.name, isFormSended: true, isRegistered: false, isModalVisible: true };
      }
    case HIDE_STUDENT_REGISTERED_MODAL:
      return {...state, isModalVisible: false}
    case REGISTRATION_STUDENT_ERROR:
      return { ...state, errorMessage: error.message, isRegistered: false, isModalVisible: true };
    default:
      return state;
  }
}
