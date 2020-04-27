import { put, call } from 'redux-saga/effects';
import { studentRegistrationService } from '../services/sudentRegistrationService';

import {NOT_UNIQUE_EMAIL, REGISTRATION_STUDENT_SUCCESS } from '../actions/types';

export function* studentRegisteredSage(payload) {
  console.log('Registered SAGA')
  console.log(payload)

  try {
    const response = yield call(studentRegistrationService, payload);
    
    console.log('RESPONSE SAGA');
    console.log(response);
    
    yield put({ type: REGISTRATION_STUDENT_SUCCESS, response });
  } catch(error) {
    console.log(error)
    yield put({ type: NOT_UNIQUE_EMAIL, error })
  }
}