import { put, call, all, takeEvery } from 'redux-saga/effects';
import { updateGroup, loadGroupsData, deleteStudent, getOneGroup } from './groups.api';
import * as types from './types';

export function* updateSaga(payload) {
    try {
        const response = yield call(updateGroup, payload);
        yield put({type: types.SET_UPDATED_CURRENT_GROUP, data: response.data});
    } catch (e) {
        yield put({type: types.ERROR_UPDATE_CURRENT_GROUP, data: e});
    }
}

export function* loadDataSaga(payload) {
    try {
        const { data } = yield call(loadGroupsData, payload);
        yield put({type: types.SET_GROUPS_DATA, data});
    } catch (e) {
        yield put({type: types.ERROR_LOADING_GROUPS_DATA, data: e});
    }
}

export function* deleteStudentSaga(payload) {
    try {
        yield call(deleteStudent, payload);
        try {
            const { data } = yield call(getOneGroup, payload);
            yield put({type: types.COMPLETE_DELETE_STUDENT, data})
        } catch (e) {
            yield put({type: types.ERROR_LOADING_GROUPS_DATA, data: e});
        }

    } catch (e) {
        yield put({type: types.ERROR_DELETE_STUDENT, data: e});
    }

}

function* watchUpdateGroup() {
    yield takeEvery(types.UPDATE_CURRENT_GROUP, updateSaga);
}

function* watchLoadGroupsData() {
    yield takeEvery(types.LOAD_GROUPS_DATA, loadDataSaga)
}

function* watchDeleteStudentFromGroup() {
    yield takeEvery(types.DELETE_STUDENT_FROM_GROUP, deleteStudentSaga)
}

export function* groupSaga() {
    yield all([
        watchUpdateGroup(),
        watchLoadGroupsData(),
        watchDeleteStudentFromGroup(),
    ])
}