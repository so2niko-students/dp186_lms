import { put, call, takeEvery, all } from 'redux-saga/effects';
import {
  registerTeacherApi,
  updateTeacherApi,
  loadTeachersApi,
  deleteTeacherApi,
} from './teachers.api';
import { showNotification } from '../../notifications/notifications';

import {
  TEACHER_COMPLETED_REGISTER,
  TEACHER_REGISTER_ERROR_HAPPENED,
  REGISTER_TEACHER_FAILED,
  REGISTER_TEACHER,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_COMPLETED,
  LOAD_TEACHERS,
  LOAD_TEACHERS_COMPLETED,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_COMPLETED,
  LOAD_TEACHERS_FAILED,
  DELETE_TEACHER,
  DELETE_TEACHER_COMPLETED
} from './types';

export function* teacherRegisteredSaga(action) {
  try {
    const response = yield call(registerTeacherApi, action.payload);
    showNotification(
      'Successfully registered',
      `Teacher with provided email ${response.data.email} was registered`,
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

export function* teacherUpdateNameSaga(action) {
  try {
    const response = yield call(updateTeacherApi, action.payload);
    showNotification(
      'Successfully updated',
      `Teacher with provided email ${response.data.email} was updated`,
      'success'
    );

    yield put({ type: UPDATE_NAME_COMPLETED, payload: response.data });
  } catch (error) {
    if (error.response) {
      showNotification('Updating error', error.response.data.error, 'error');
    } else {
      showNotification('Updating error', error.message, 'error');
    }
  }
}

export function* teacherUpdateEmailSaga(action) {
  try {
    const response = yield call(updateTeacherApi, action.payload);
    showNotification(
      'Successfully updated',
      `Teacher with provided email ${response.data.email} was updated`,
      'success'
    );

    yield put({ type: UPDATE_EMAIL_COMPLETED, payload: response.data });
  } catch (error) {
    if (error.response) {
      showNotification('Updating error', error.response.data.error, 'error');
    } else {
      showNotification('Updating error', error.message, 'error');
    }
  }
}

export function* loadTeachersSaga(action) {
  try {
    const response = yield call(loadTeachersApi, action.payload);

    yield put({ type: LOAD_TEACHERS_COMPLETED, payload: response.data });
  } catch (error) {
    showNotification('Something went wrong', error.message, 'error');

    yield put({ type: LOAD_TEACHERS_FAILED });
  }
}

export function* teacherDeleteSaga(action) {
  try {
    const response = yield call(deleteTeacherApi, action.payload);
    showNotification(
      'Successfully deleted',
      `Teacher with provided id ${response.data} was deleted`,
      'success'
    );

    yield put({ type: DELETE_TEACHER_COMPLETED, payload: response.data });
  } catch (error) {
    if (error.response) {
      showNotification('Deleting error', error.response.data.error, 'error');

    } else {
      showNotification('Deleting error', error.message, 'error');

    }
  }
}

export function* teachersSaga() {
  yield all([
    takeEvery(DELETE_TEACHER, teacherDeleteSaga),
    takeEvery(UPDATE_EMAIL_SUCCESS, teacherUpdateEmailSaga),
    takeEvery(LOAD_TEACHERS, loadTeachersSaga),
    takeEvery(UPDATE_NAME_SUCCESS, teacherUpdateNameSaga),
    takeEvery(REGISTER_TEACHER, teacherRegisteredSaga),
  ]);
}
