import { put, call, all, takeEvery } from 'redux-saga/effects';
import { forgotPassswordApi } from './forgot.password.api';
import * as types from './types';

function* forgotPasswordSaga(data) {
    try {
        const response = yield call(forgotPassswordApi, data.payload);
        yield put({ type: types.FORGOT_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.FORGOT_PASSWORD_ERROR, payload: error });
    }
}

export function* forgotPassSaga() {
    yield all([
        takeEvery(types.FORGOT_PASSWORD, forgotPasswordSaga)
    ])
}
