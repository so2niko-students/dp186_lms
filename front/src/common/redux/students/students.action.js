import { REGISTER_STUDENT, STUDENT_COMPLETED_REGISTER } from './types';

export const registerStudent = (student) => ({ type: REGISTER_STUDENT, payload: student });

export const studentCompletedRegister = () => ({ type: STUDENT_COMPLETED_REGISTER });
