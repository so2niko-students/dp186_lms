import { REGISTER_STUDENT, STUDENT_COMPLETED_REGISTRATION } from './types';

export const studentRegistered = (student) => ({ type: REGISTER_STUDENT, payload: student });

export const registrationCompleted = () => ({ type: STUDENT_COMPLETED_REGISTRATION });
