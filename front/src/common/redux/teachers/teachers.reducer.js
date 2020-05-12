import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  SHOW_TEACHER_REGISTER_MODAL,
  HIDE_TEACHER_REGISTER_MODAL,
  SHOW_LOADER,
  UPDATE_NAME,
  CANCEL_NAME_UPDATING,
  UPDATE_NAME_COMPLETED,
  LOAD_TEACHERS_COMPLETED,
  UPDATE_EMAIL,
  CANCEL_EMAIL_UPDATING,
  UPDATE_EMAIL_COMPLETED,
  LOAD_TEACHERS_FAILED,
  SHOW_MODAL_DELETE,
  HIDE_MODAL_DELETE,
  DELETE_TEACHER_COMPLETED,
  REMEMBER_UPDATING_ID,
  SHOW_MODAL_CHANGE_PASSWORD,
  HIDE_MODAL_CHANGE_PASSWORD,
} from './types';

const initialState = {
  isRegistrationModalVisible: false,
  loading: false,
  changeNameIds: [],
  changeEmailIds: [],
  teachers: [],
  total: 1,
  currentPage: 1,
  isDeleteModalVisible: false,
  isChangePasswordModalVisible: false,
};

export function teachersReducer(state = initialState, action) {
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

    case UPDATE_NAME: {
      const newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds.push(action.payload.id);
      return { ...state, changeNameIds: newChangeNameIds };
    }

    case REMEMBER_UPDATING_ID:
      return { ...state, updatingId: action.payload.id };

    case CANCEL_NAME_UPDATING: {
      let newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds = newChangeNameIds.filter((id) => id !== action.payload.id);
      return { ...state, changeNameIds: newChangeNameIds };
    }

    case UPDATE_NAME_COMPLETED: {
      let newChangeNameIds = state.changeNameIds.slice();
      newChangeNameIds = newChangeNameIds.filter((id) => id !== action.payload.id);
      const newTeachers = [];
      state.teachers.forEach((obj) => newTeachers.push({ ...obj }));
      const id = newTeachers.findIndex((teacher) => teacher.id === action.payload.id);
      newTeachers[id].firstName = action.payload.firstName;
      newTeachers[id].lastName = action.payload.lastName;
      return { ...state, changeNameIds: newChangeNameIds, teachers: newTeachers };
    }

    case LOAD_TEACHERS_COMPLETED:
      return {
        ...state,
        teachers: action.payload.data,
        total: action.payload.total,
        currentPage: action.payload.page,
        loading: false,
      };

    case UPDATE_EMAIL: {
      const newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds.push(action.payload.id);
      return { ...state, changeEmailIds: newChangeEmailIds };
    }

    case CANCEL_EMAIL_UPDATING: {
      let newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds = newChangeEmailIds.filter((id) => id !== action.payload.id);
      return { ...state, changeEmailIds: newChangeEmailIds };
    }

    case UPDATE_EMAIL_COMPLETED: {
      let newChangeEmailIds = state.changeEmailIds.slice();
      newChangeEmailIds = newChangeEmailIds.filter((id) => id !== action.payload.id);
      const newTeachers = [];
      state.teachers.forEach((obj) => newTeachers.push({ ...obj }));
      const id = newTeachers.findIndex((teacher) => teacher.id === action.payload.id);
      newTeachers[id].email = action.payload.email;
      return { ...state, changeEmailIds: newChangeEmailIds, teachers: newTeachers };
    }

    case LOAD_TEACHERS_FAILED:
      return { ...state, loading: false };

    case SHOW_MODAL_DELETE:
      return { ...state, isDeleteModalVisible: true, deleteTeacherId: action.payload.id };

    case HIDE_MODAL_DELETE:
      return { ...state, isDeleteModalVisible: false };

    case DELETE_TEACHER_COMPLETED: {
      let newTeachers = [];
      state.teachers.forEach((obj) => newTeachers.push({ ...obj }));
      newTeachers = newTeachers.filter(({ id }) => id !== action.payload);
      return { ...state, teachers: newTeachers, isDeleteModalVisible: false };
    }

    case SHOW_MODAL_CHANGE_PASSWORD:
      return { ...state, isChangePasswordModalVisible: true, changePasswordTeacherId: action.payload.id };

    case HIDE_MODAL_CHANGE_PASSWORD:
      return { ...state, isChangePasswordModalVisible: false };

    default:
      return state;
  }
}
