import { takeEvery, call, put, all } from 'redux-saga/effects';
import { updateProfileApi } from './update.profile.api';
import * as types from './types';

function* userUpdateProfileSaga(payload) {
    console.log(payload)
    try {
        const response = yield call(updateProfileApi, payload);
        yield put({ type: types.UPDATE_USER_PROFILE_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.UPDATE_USER_PROFILE_ERROR, error })
    }
}

function* watchUserUpdateProfile() {
    yield takeEvery(types.UPDATE_USER_PROFILE, userUpdateProfileSaga);
}

export function* updateSaga() {
    all([
        watchUserUpdateProfile()
    ])
}