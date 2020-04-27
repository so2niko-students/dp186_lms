import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';
import { studentRegisteredSage } from './studentRegisteredSage';

import * as types from '../actions/types';

export function* watchUserklAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export  function* watchStudentRegistaration() {
  yield takeLatest(types.REGISTER_STUDENT, studentRegisteredSage);
}