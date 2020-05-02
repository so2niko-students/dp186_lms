import { REGISTER_STUDENT, STUDENT_COMPLETED_REG } from './types';

export const registerStudent = (student) => ({ type: REGISTER_STUDENT, payload: student });

export const studentCompletedReg = () => ({ type: STUDENT_COMPLETED_REG });
