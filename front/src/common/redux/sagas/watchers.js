import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './authenticationSaga';

import * as types from '../actions/types';


export default function* watchUserklAuthentication() {
  console.log('watchUserklAuthentication')
  yield takeLatest(types.LOGIN_USER, loginSaga);
}