import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../services/authenticationService';

import * as types from '../actions/types';

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);

    if(response.hasOwnProperty('token')){
      localStorage.setItem('token', response.token)
    }
    
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}