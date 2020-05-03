import { put, call, all, takeEvery } from 'redux-saga/effects';
import { loginApi } from './auth.api';
import * as types from './types';

function* loginSaga(payload) {
    try {
        const response = yield call(loginApi, payload);

        localStorage.setItem('token', response.data.token);
        yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.LOGIN_SERVER_ERROR, error });
    }
}

function* watchUserklAuthentication() {
    yield takeEvery(types.LOGIN_USER, loginSaga);
}

export function* authSaga() {
    yield all([
        watchUserklAuthentication(),
    ])
}
