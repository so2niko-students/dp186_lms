import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authenticationService';

import * as types from '../actions/types';

export function* loginSaga(payload) {
  console.log('AUTH SAGA')
  console.log(payload)

  try {
    const response = yield call(loginUserService, payload);
    
    console.log('RESPONSE SAGA');
    console.log(response);

    localStorage.setItem('token', response.token)
    
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    console.log(error)
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}