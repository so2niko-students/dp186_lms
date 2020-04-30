import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';
import { studentRegisteredSaga } from './studentRegisteredSaga';
import { teacherRegisteredSaga } from './teacherRegisteredSaga';

import * as types from '../actions/types';

export function* watchUserklAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export  function* watchStudentRegistaration() {
  yield takeLatest(types.REGISTER_STUDENT, studentRegisteredSaga);
}

export  function* watchTeacherRegistaration() {
  yield takeLatest(types.REGISTER_TEACHER, teacherRegisteredSaga);
}