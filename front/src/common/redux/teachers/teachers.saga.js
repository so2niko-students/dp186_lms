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
  UPDATE_NAME,
  UPDATE_NAME_COMPLETED,
  LOAD_TEACHERS,
  LOAD_TEACHERS_COMPLETED,
  UPDATE_EMAIL,
  UPDATE_EMAIL_COMPLETED,
  LOAD_TEACHERS_FAILED,
  DELETE_TEACHER,
  DELETE_TEACHER_COMPLETED
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
    if (error.response) {
      showNotification('Updating error', error.response.data.error, 'error');
    } else {
      showNotification('Updating error', error.message, 'error');
    }
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
    if (error.response) {
      showNotification('Updating error', error.response.data.error, 'error');
    } else {
      showNotification('Updating error', error.message, 'error');
    }
  }
}

export function* loadTeachersSaga(payload) {
  try {
    const response = yield call(loadTeachersApi, payload);

    yield put({ type: LOAD_TEACHERS_COMPLETED, payload: response.data });
  } catch (error) {
    showNotification('Something went wrong', error.message, 'error');

    yield put({ type: LOAD_TEACHERS_FAILED });
  }
}

export function* teacherDeleteSaga(payload) {
  try {
    const response = yield call(deleteTeacherApi, payload);
    showNotification(
      'Successfully deleted',
      `User with provided id ${response.data} was deleted`,
      'success'
    );
      console.log(response)
    yield put({ type: DELETE_TEACHER_COMPLETED, payload: response.data });
  } catch (error) {
    if (error.response) {
      showNotification('Deleting error', error.response.data.error, 'error');

    } else {
      showNotification('Deleting error', error.message, 'error');

    }
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

function* watchTeacherDeleting() {
  yield takeEvery(DELETE_TEACHER, teacherDeleteSaga);
}

export function* teachersSaga() {
  yield all([
    watchTeacherRegistaration(),
    watchTeacherNameUpdating(),
    watchTeachersLoad(),
    watchTeacherEmailUpdating(),
    watchTeacherDeleting()
  ]);
}
