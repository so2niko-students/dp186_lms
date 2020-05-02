import { SHOW_TEACHER_REGISTER_MODAL, HIDE_TEACHER_REGISTER_MODAL, REGISTER_TEACHER, SHOW_LOADER } from './types';

export const registerTeacher = (teacher) => ({type: REGISTER_TEACHER,payload: teacher});

export const hideTeacherRegisteredModal = () => ({type: HIDE_TEACHER_REGISTER_MODAL})

export const showTeacherRegisteredModal = () => ( {type: SHOW_TEACHER_REGISTER_MODAL})

export const showLoader = () => ({type: SHOW_LOADER})
