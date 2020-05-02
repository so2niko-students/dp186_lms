import {
  TEACHER_COMPLETED_REG,
  TEACHER_REG_LOGICAL_ERROR_HAPPENED,
  REG_TEACHER_FAILED,
  SHOW_TEACHER_REG_MODAL,
  HIDE_TEACHER_REG_MODAL,
  SHOW_LOADER
} from './types';

const initialState = {
  isRegistrationModalVisible: false,
  loading: false,
};

export function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case TEACHER_COMPLETED_REG:
      return { ...state,  isRegistrationModalVisible: false, loading: false };
    case TEACHER_REG_LOGICAL_ERROR_HAPPENED:
      return { ...state, loading: false};
    case SHOW_TEACHER_REG_MODAL:
      return { ...state, isRegistrationModalVisible: true };
    case HIDE_TEACHER_REG_MODAL:
      return { ...state, isRegistrationModalVisible: false };
    case REG_TEACHER_FAILED:
      return {...state, loading: false};
    case SHOW_LOADER:
      return {...state, loading: true}
    default:
      return state;
  }
}
