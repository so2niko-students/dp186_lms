import { put, call } from 'redux-saga/effects';
import { teacherRegistrationService } from '../services/teacherRegistrationService';

import {REGISTRATION_TEACHER_ERROR, REGISTRATION_TEACHER_RESPONSE } from '../actions/types';

export function* teacherRegisteredSaga(payload) {
  try {
    const response = yield call(teacherRegistrationService, payload);
    console.log(response);
    yield put({ type: REGISTRATION_TEACHER_RESPONSE, response });
  } catch(error) {
    console.log(error)
    yield put({ type: REGISTRATION_TEACHER_ERROR, error })
  }
}