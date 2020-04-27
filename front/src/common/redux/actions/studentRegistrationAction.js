import { REGISTER_STUDENT, VALIDATE_FIRST_NAME_ENG } from './types';

export const studentRegistered = (student) => {
  console.log(student);
  return {
    type: REGISTER_STUDENT,
    payload: student,
  };
};

export const validatefirstNameEng = (student) => {
  console.log(student);
  return {
    type: VALIDATE_FIRST_NAME_ENG,
    payload: student,
  };
};
