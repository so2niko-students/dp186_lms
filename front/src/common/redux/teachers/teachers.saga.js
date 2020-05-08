import { put, call, takeEvery, all } from 'redux-saga/effects';
import { registerTeacherApi } from './teachers.api';
import { showNotification } from '../../notifications/notifications';

import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  REGISTER_TEACHER,
} from './types';

export function* teacherRegisteredSaga(payload) {
  try {
    const response = yield call(registerTeacherApi, payload);
    showNotification(
      'Successfully registered',
      `User with provided email ${response.data.email} was registered`,
      'success'
    );

    yield put({ type: TEACHER_COMPLETED_REGISTER });
  } catch (error) {
    if (error.response) {
      showNotification('Registration error', error.response.data.error, 'error');

      yield put({ type: TEACHER_REGISTER_ERROR_HAPPENED });
    } else {
      showNotification('Registration error', error.message, 'error');

      yield put({ type: REGISTER_TEACHER_FAILED });
    }
  }
}

function* watchTeacherRegistaration() {
  yield takeEvery(REGISTER_TEACHER, teacherRegisteredSaga);
}

export function* teachersSaga() {
  yield all([watchTeacherRegistaration()]);
}
