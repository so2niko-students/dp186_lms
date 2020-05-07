import { SHOW_TEACHER_REGISTER_MODAL, HIDE_TEACHER_REGISTER_MODAL, REGISTER_TEACHER, SHOW_LOADER, CHANGE_NAME_SURNAME, CANCEL_NAME_CHANGING, UPDATE_NAME, LOAD_TEACHERS, CHANGE_EMAIL, CANCEL_EMAIL_CHANGING, UPDATE_EMAIL } from './types';

export const registerTeacher = (teacher) => ({type: REGISTER_TEACHER,payload: teacher});

export const hideTeacherRegisteredModal = () => ({type: HIDE_TEACHER_REGISTER_MODAL})

export const showTeacherRegisteredModal = () => ( {type: SHOW_TEACHER_REGISTER_MODAL})

export const showLoader = () => ({type: SHOW_LOADER})

export const changeNameSurname = (id) => ({type: CHANGE_NAME_SURNAME, id});

export const cancelNameChanging = (id) => ({type: CANCEL_NAME_CHANGING, id});

export const updateName = (data) => ({type: UPDATE_NAME, payload: data});

export const loadTeachers = () => ({type: LOAD_TEACHERS});

export const changeEmail = (id) => ({type: CHANGE_EMAIL, id});

export const cancelEmailChanging = (id) => ({type: CANCEL_EMAIL_CHANGING, id});

export const updateEmail = (data) => ({type: UPDATE_EMAIL, payload: data})
