import { takeEvery, call, put, all } from 'redux-saga/effects';
import { updateProfileApi } from './update.profile.api';
import * as types from './types';

export function* updateSaga(payload) {
    try {
        const response = yield call(updateProfileApi, payload);
        yield put({ type: types.UPDATE_USER_PROFILE_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.UPDATE_USER_PROFILE_ERROR, payload: error })
    }
}

export function* userUpdateProfileSaga() {
    yield all([
        takeEvery(types.UPDATE_USER_PROFILE, updateSaga)
    ])
}