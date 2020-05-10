import { put, call, all, takeEvery } from 'redux-saga/effects';
import { setPassswordApi } from './set.password.api';
import * as types from './types';

function* setPasswordSaga(payload) {
    try {
        const response = yield call(setPassswordApi, payload);
        yield put({ type: types.SET_PASSWORD_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.SET_PASSWORD_ERROR, payload: error });
    }
}

export function* passwordSaga() {
    yield all([  
        takeEvery(types.SET_PASSWORD, setPasswordSaga) 
    ])
}