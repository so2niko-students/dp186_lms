import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  SHOW_TEACHER_REGISTER_MODAL,
  HIDE_TEACHER_REGISTER_MODAL,
  SHOW_LOADER
} from './types';

const initialState = {
  isRegistrationModalVisible: false,
  loading: false,
};

export function teachersReducer(state = initialState, action) {
  switch (action.type) {
    case TEACHER_COMPLETED_REGISTER:
      return { ...state,  isRegistrationModalVisible: false, loading: false };
    case TEACHER_REGISTER_ERROR_HAPPENED:
      return { ...state, loading: false};
    case SHOW_TEACHER_REGISTER_MODAL:
      return { ...state, isRegistrationModalVisible: true };
    case HIDE_TEACHER_REGISTER_MODAL:
      return { ...state, isRegistrationModalVisible: false };
    case REGISTER_TEACHER_FAILED:
      return {...state, loading: false};
    case SHOW_LOADER:
      return {...state, loading: true}
    default:
      return state;
  }
}
