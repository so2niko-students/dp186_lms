import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  SHOW_TEACHER_REGISTER_MODAL,
  HIDE_TEACHER_REGISTER_MODAL,
  SHOW_LOADER,
  CHANGE_NAME,
  CANCEL_NAME_CHANGING,
  UPDATE_NAME_COMPLETED,
  LOAD_TEACHERS_COMPLETED,
  CHANGE_EMAIL,
  CANCEL_EMAIL_CHANGING,
  UPDATE_EMAIL_COMPLETED,
  LOAD_TEACHERS_FAILED,
  TEACHER_UPDATE_ERROR_HAPPENED
} from './types';

const initialState = {
  isRegistrationModalVisible: false,
  loading: false,
  changeNameIds: [],
  changeEmailIds: [],
  teachers: [],
  total: 1,
  currentPage: 1,
};

export function teachersReducer(state = initialState, action) {
  let newChangeNameIds;
  let newChangeEmailIds;
  let newTeachers;
  let id;

  switch (action.type) {
    case TEACHER_COMPLETED_REGISTER:
      return { ...state, isRegistrationModalVisible: false, loading: false };

    case TEACHER_REGISTER_ERROR_HAPPENED:
      return { ...state, loading: false };

    case SHOW_TEACHER_REGISTER_MODAL:
      return { ...state, isRegistrationModalVisible: true };

    case HIDE_TEACHER_REGISTER_MODAL:
      return { ...state, isRegistrationModalVisible: false };

    case REGISTER_TEACHER_FAILED:
      return { ...state, loading: false };

    case SHOW_LOADER:
      return { ...state, loading: true };

    case CHANGE_NAME:
      newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds.push(action.id);
      return { ...state, changeNameIds: newChangeNameIds };

    case CANCEL_NAME_CHANGING:
      newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds = newChangeNameIds.filter((id) => id !== action.id);
      return { ...state, changeNameIds: newChangeNameIds };

    case UPDATE_NAME_COMPLETED:
      newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds = newChangeNameIds.filter((id) => id !== action.payload.id);
      newTeachers = [];
      state.teachers.forEach((obj) => newTeachers.push({ ...obj }));
      id = newTeachers.findIndex((teacher) => teacher.id === action.payload.id);
      newTeachers[id].firstName = action.payload.firstName;
      newTeachers[id].lastName = action.payload.lastName;
      return { ...state, changeNameIds: newChangeNameIds, teachers: newTeachers };

    case LOAD_TEACHERS_COMPLETED:
      return {
        ...state,
        teachers: action.payload.data,
        total: action.payload.total,
        currentPage: action.payload.actualPage,
        loading: false,
      };

    case CHANGE_EMAIL:
      newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds.push(action.id);
      return { ...state, changeEmailIds: newChangeEmailIds };

    case CANCEL_EMAIL_CHANGING:
      newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds = newChangeEmailIds.filter((id) => id !== action.id);
      return { ...state, changeEmailIds: newChangeEmailIds };

    case UPDATE_EMAIL_COMPLETED:
      newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds = newChangeEmailIds.filter((id) => id !== action.payload.id);
      newTeachers = [];
      state.teachers.forEach((obj) => newTeachers.push({ ...obj }));
      id = newTeachers.findIndex((teacher) => teacher.id === action.payload.id);
      newTeachers[id].email = action.payload.email;
      return { ...state, changeEmailIds: newChangeEmailIds, teachers: newTeachers };

    case LOAD_TEACHERS_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
}
