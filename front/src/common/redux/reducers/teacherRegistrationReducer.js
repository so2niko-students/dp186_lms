import {
  REGISTRATION_TEACHER_RESPONSE,
  REGISTRATION_TEACHER_ERROR,
  SHOW_TEACHER_REGISTERED_MODAL,
  HIDE_TEACHER_REGISTERED_MODAL,
  HIDE_TEACHER_RESPONSE_MODAL,
} from '../actions/types';

const initialState = {
  isFormSended: false,
  isRegistrationModalVisible: false,
  isResponseModalVisible: false,
  isRegistered: false,
  errorMessage: '',
};

export function teacherRegister(state = initialState, action) {
  const { response } = action;
  const { error } = action;
  console.log(response);
  console.log(error);
  switch (action.type) {
    case REGISTRATION_TEACHER_RESPONSE:
      if (response.ok && !response.isJoi) {
        return { ...state, isFormSended: true, isRegistered: true };
      } else if (!response.isJoi) {
        return {
          ...state,
          errorMessage: response.json.error,
          isFormSended: true,
          isRegistered: false,
          isResponseModalVisible: true,
        };
      } else {
        return {
          ...state,
          errorMessage: response.json.name,
          isFormSended: true,
          isRegistered: false,
          isResponseModalVisible: true,
        };
      }
    case SHOW_TEACHER_REGISTERED_MODAL:
      return { ...state, isRegistrationModalVisible: true };
    case HIDE_TEACHER_REGISTERED_MODAL:
      return { ...state, isRegistrationModalVisible: false };
    case HIDE_TEACHER_RESPONSE_MODAL:
      return { ...state, isResponseModalVisible: false };
    case REGISTRATION_TEACHER_ERROR:
      return {
        ...state,
        errorMessage: error.message,
        isRegistered: false,
        isResponseModalVisible: true,
      };
    default:
      return state;
  }
}

// case REGISTRATION_STUDENT:
//   if (response.ok && !response.isJoi) {
//     return { ...state, isFormSended: true, isRegistered: true,  };
//   } else if (!response.isJoi) {
//     return { ...state, errorMessage: response.json.error, isFormSended: true, isRegistered: false, isModalVisible: true };
//   } else {
//     return { ...state, errorMessage: response.json.name, isFormSended: true, isRegistered: false, isModalVisible: true };
//   }
// case HIDE_STUDENT_REGISTERED_MODAL:
//   return {...state, isModalVisible: false}
// case REGISTRATION_STUDENT_ERROR:
//   return { ...state, errorMessage: error.message, isRegistered: false, isModalVisible: true };
// default:
//   return state;
