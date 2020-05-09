import {
  SHOW_TEACHER_REGISTER_MODAL,
  HIDE_TEACHER_REGISTER_MODAL,
  REGISTER_TEACHER,
  SHOW_LOADER,
  CHANGE_NAME,
  CANCEL_NAME_CHANGING,
  UPDATE_NAME,
  LOAD_TEACHERS,
  CHANGE_EMAIL,
  CANCEL_EMAIL_CHANGING,
  UPDATE_EMAIL,
  DELETE_TEACHER,
  SHOW_MODAL_DELETE,
  HIDE_MODAL_DELETE
} from './types';

export const registerTeacher = (teacher) => ({ type: REGISTER_TEACHER, payload: teacher });

export const hideTeacherRegisteredModal = () => ({ type: HIDE_TEACHER_REGISTER_MODAL });

export const showTeacherRegisteredModal = () => ({ type: SHOW_TEACHER_REGISTER_MODAL });

export const showLoader = () => ({ type: SHOW_LOADER });

export const changeName = (id) => ({ type: CHANGE_NAME, id });

export const cancelNameChanging = (id) => ({ type: CANCEL_NAME_CHANGING, id });

export const updateName = (data) => ({ type: UPDATE_NAME, payload: data });

export const loadTeachers = (querys) => ({ type: LOAD_TEACHERS, querys });

export const changeEmail = (id) => ({ type: CHANGE_EMAIL, id });

export const cancelEmailChanging = (id) => ({ type: CANCEL_EMAIL_CHANGING, id });

export const updateEmail = (data) => ({ type: UPDATE_EMAIL, payload: data });

export const deleteTeacher = (id) => ({ type: DELETE_TEACHER, id });

export const showModalDelete = (id) => ({ type: SHOW_MODAL_DELETE, id });

export const hideModalDelete = () => ({ type: HIDE_MODAL_DELETE });