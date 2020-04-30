import { put, call } from 'redux-saga/effects';
import { studentRegistrationService } from '../services/sudentRegistrationService';

import {REGISTRATION_STUDENT_ERROR, REGISTRATION_STUDENT } from '../actions/types';

export function* studentRegisteredSaga(payload) {
  try {
    const response = yield call(studentRegistrationService, payload);
    
    yield put({ type: REGISTRATION_STUDENT, response });
  } catch(error) {
    console.log(error)
    yield put({ type: REGISTRATION_STUDENT_ERROR, error })
  }
}