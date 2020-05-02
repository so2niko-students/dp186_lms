import { SHOW_TEACHER_REG_MODAL, HIDE_TEACHER_REG_MODAL, REGISTER_TEACHER, SHOW_LOADER, HIDE_LOADER } from './types';

export const registerTeacher = (teacher) => ({type: REGISTER_TEACHER,payload: teacher});

export const hideTeacherRegisteredModal = () => ({type: HIDE_TEACHER_REG_MODAL})

export const showTeacherRegisteredModal = () => ( {type: SHOW_TEACHER_REG_MODAL})

export const showLoader = () => ({type: SHOW_LOADER})

export const hideLoader = () => ({type: HIDE_LOADER})