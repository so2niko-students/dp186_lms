import { put, call, all, takeEvery } from 'redux-saga/effects';
import { updateGroup, loadGroupsData, deleteStudent, getOneGroup, createGroupApi } from './groups.api';
import * as types from './types';

function* createGroupOneSaga(payload) {
    try {    
        const response = yield call(createGroupApi, payload);
        yield put({ type: types.CREATE_GROUP_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.CREATE_GROUP_ERROR, payload: error });
    }
}

function* updateSaga(action) {
    try {
        const data = yield call(updateGroup, action.payload);
        yield put({type: types.SET_UPDATED_CURRENT_GROUP, payload: data});
    } catch (e) {
        yield put({type: types.ERROR_UPDATE_CURRENT_GROUP, payload: e});
    }
}

function* loadDataSaga() {
    try {
        const data = yield call(loadGroupsData);
        yield put({type: types.SET_GROUPS_DATA, payload: data});
    } catch (e) {
        yield put({type: types.ERROR_LOADING_GROUPS_DATA, payload: e});
    }
}

function* deleteStudentSaga(action) {
    try {
        yield call(deleteStudent, action.payload);
        try {
            const data = yield call(getOneGroup, action.payload);
            yield put({type: types.COMPLETE_DELETE_STUDENT, payload: data})
        } catch (e) {
            yield put({type: types.ERROR_LOADING_GROUPS_DATA, payload: e});
        }
    } catch (e) {
        yield put({type: types.ERROR_DELETE_STUDENT, payload: e});
    }

}

export function* groupSaga() {
    yield all([
        takeEvery(types.UPDATE_CURRENT_GROUP, updateSaga),
        takeEvery(types.LOAD_GROUPS_DATA, loadDataSaga),
        takeEvery(types.DELETE_STUDENT_FROM_GROUP, deleteStudentSaga),
        takeEvery(types.CREATE_GROUP, createGroupOneSaga) 
    ])
}