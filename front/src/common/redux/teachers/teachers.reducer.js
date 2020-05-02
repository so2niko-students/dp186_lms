import {
  TEACHER_COMPLETED_REG,
  TEACHER_REG_LOGICAL_ERROR_HAPPENED,
  REG_TEACHER_FAILED,
  SHOW_TEACHER_REG_MODAL,
  HIDE_TEACHER_REG_MODAL,
} from './types';

const initialState = {
  isRegistrationModalVisible: false,
};

export function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case TEACHER_COMPLETED_REG:
      return { ...state,  isRegistrationModalVisible: false };
    case TEACHER_REG_LOGICAL_ERROR_HAPPENED:
      return { ...state};
    case SHOW_TEACHER_REG_MODAL:
      return { ...state, isRegistrationModalVisible: true };
    case HIDE_TEACHER_REG_MODAL:
      return { ...state, isRegistrationModalVisible: false };
    case REG_TEACHER_FAILED:
      return {...state};
    default:
      return state;
  }
}
