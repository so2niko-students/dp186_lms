import { REGISTER_STUDENT, HIDE_STUDENT_REGISTERED_MODAL } from './types';

export const studentRegistered = (student) => {
  return {
    type: REGISTER_STUDENT,
    payload: student,
  };
};

export const hideStudentRegisteredModal = () => {
  return {
    type: HIDE_STUDENT_REGISTERED_MODAL
  }
}