import { put, call, all, takeEvery } from 'redux-saga/effects';
import { updateGroup } from './groups.api';
import * as types from './types';

export function* updateSaga(payload) {
    try {
        const { data } = yield call(updateGroup, payload);
        yield put({type: types.SET_CURRENT_GROUP, data});
    } catch (e) {
        console.log(e);
    }
}

function* watchUpdateGroup() {
    yield takeEvery(types.WATCH_CURRENT_GROUP, updateSaga);
}

export function* groupSaga() {
    yield all([
        watchUpdateGroup(),
    ])
}