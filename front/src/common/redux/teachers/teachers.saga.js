import { put, call, takeEvery, all } from 'redux-saga/effects';
import { registerTeacherApi } from './teachers.api';

import {TEACHER_COMPLETED_REG, TEACHER_REG_LOGICAL_ERROR_HAPPENED, REG_TEACHER_FAILED, REGISTER_TEACHER } from './types';

export function* teacherRegisteredSaga(payload) {
  try {
    const response = yield call(registerTeacherApi, payload);
    console.log(response);
    yield put({ type: TEACHER_COMPLETED_REG, email: response.data.email });
  } catch(error) {
    if (error.response) {
      yield put({ type: TEACHER_REG_LOGICAL_ERROR_HAPPENED, error: error.response.data.error });
    } else {
      yield put({ type: REG_TEACHER_FAILED, error: error.message });
    }
  }
}


function* watchTeacherRegistaration() {
  yield takeEvery(REGISTER_TEACHER, teacherRegisteredSaga);
}

export  function* teachersSaga() {
  yield all([
    watchTeacherRegistaration(),
  ])
}