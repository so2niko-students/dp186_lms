import { SHOW_TEACHER_REGISTERED_MODAL, HIDE_TEACHER_REGISTERED_MODAL, REGISTER_TEACHER, HIDE_TEACHER_RESPONSE_MODAL } from './types';

export const teacherRegistered = (teacher) => {
  return {
    type: REGISTER_TEACHER,
    payload: teacher,
  };
};

export const hideTeacherRegisteredModal = () => {
  return {
    type: HIDE_TEACHER_REGISTERED_MODAL
  }
}


export const showTeacherRegisteredModal = () => {
  return {
    type: SHOW_TEACHER_REGISTERED_MODAL
  }
}

export const hideTeacherResponseModal = () => {
  return {
    type: HIDE_TEACHER_RESPONSE_MODAL
  }
}