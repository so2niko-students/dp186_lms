import { put, call, takeEvery, all } from 'redux-saga/effects';
import { registerTeacherApi } from './teachers.api';
import { showNotification } from '../../notifications/notifications';

import {TEACHER_COMPLETED_REG, TEACHER_REG_LOGICAL_ERROR_HAPPENED, REG_TEACHER_FAILED, REGISTER_TEACHER } from './types';

export function* teacherRegisteredSaga(payload) {
  try {
    const response = yield call(registerTeacherApi, payload);
    showNotification('Successfully registered', `User with provided email ${response.data.email} was registered`, 'success');

    yield put({ type: TEACHER_COMPLETED_REG });
  } catch(error) {
    if (error.response) {
      showNotification('Sorry but you did not register', error.response.data.error, 'error');

      yield put({ type: TEACHER_REG_LOGICAL_ERROR_HAPPENED });
    } else {
      showNotification('Sorry but you did not register', error.message, 'error');

      yield put({ type: REG_TEACHER_FAILED });
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