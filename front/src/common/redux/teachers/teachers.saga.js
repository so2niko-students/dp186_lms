import { put, call, takeEvery, all } from 'redux-saga/effects';
import { registerTeacherApi, updateTeacherApi, loadTeachersApi } from './teachers.api';
import { showNotification } from '../../notifications/notifications';

import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  REGISTER_TEACHER,
  UPDATE_NAME,
  UPDATE_NAME_COMPLETED,
  LOAD_TEACHERS,
  LOAD_TEACHERS_COMPLETED,
  UPDATE_EMAIL,
  UPDATE_EMAIL_COMPLETED
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
      showNotification('Sorry but you did not register', error.response.data.error, 'error');

      yield put({ type: TEACHER_REGISTER_ERROR_HAPPENED });
    } else {
      showNotification('Sorry but you did not register', error.message, 'error');

      yield put({ type: REGISTER_TEACHER_FAILED });
    }
  }
}

export function* teacherUpdateNameSaga(payload) {
  try {
    const response = yield call(updateTeacherApi, payload);
    showNotification(
      'Successfully updated',
      `User with provided email ${response.data.email} was updated`,
      'success'
    );

    yield put({ type: UPDATE_NAME_COMPLETED, payload: response.data });
  } catch (error) {
    // if (error.response) {
    //   showNotification('Sorry but you did not register', error.response.data.error, 'error');

    //   yield put({ type: TEACHER_REGISTER_ERROR_HAPPENED });
    // } else {
    //   showNotification('Sorry but you did not register', error.message, 'error');

    //   yield put({ type: REGISTER_TEACHER_FAILED });
    // }
  }
}

export function* teacherUpdateEmailSaga(payload) {
  try {
    const response = yield call(updateTeacherApi, payload);
    showNotification(
      'Successfully updated',
      `User with provided email ${response.data.email} was updated`,
      'success'
    );

    yield put({ type: UPDATE_EMAIL_COMPLETED, payload: response.data });
  } catch (error) {
    // if (error.response) {
    //   showNotification('Sorry but you did not register', error.response.data.error, 'error');

    //   yield put({ type: TEACHER_REGISTER_ERROR_HAPPENED });
    // } else {
    //   showNotification('Sorry but you did not register', error.message, 'error');

    //   yield put({ type: REGISTER_TEACHER_FAILED });
    // }
  }
}

export function* loadTeachersSaga() {
  try {
    const response = yield call(loadTeachersApi);

    yield put({ type: LOAD_TEACHERS_COMPLETED, payload: response.data });
  } catch (error) {
    // if (error.response) {
    //   showNotification('Sorry but you did not register', error.response.data.error, 'error');

    //   yield put({ type: TEACHER_REGISTER_ERROR_HAPPENED });
    // } else {
    //   showNotification('Sorry but you did not register', error.message, 'error');

    //   yield put({ type: REGISTER_TEACHER_FAILED });
    // }
  }
}

function* watchTeacherRegistaration() {
  yield takeEvery(REGISTER_TEACHER, teacherRegisteredSaga);
}

function* watchTeacherNameUpdating() {
  yield takeEvery(UPDATE_NAME, teacherUpdateNameSaga);
}

function* watchTeachersLoad() {
  yield takeEvery(LOAD_TEACHERS, loadTeachersSaga);
}

function* watchTeacherEmailUpdating() {
  yield takeEvery(UPDATE_EMAIL, teacherUpdateEmailSaga);
}

export function* teachersSaga() {
  yield all([watchTeacherRegistaration(), watchTeacherNameUpdating(), watchTeachersLoad(), watchTeacherEmailUpdating()]);
}
