import { put, call, all, takeEvery } from 'redux-saga/effects';
import { createGroupApi } from './groups.api';
import * as types from './types';

function* createGroupOneSaga(payload) {
    try {    
        const response = yield call(createGroupApi, payload);
        yield put({ type: types.CREATE_GROUP_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.CREATE_GROUP_ERROR, payload: error });
    }
}

export function* createGroupSaga() {
    yield all([  
        takeEvery(types.CREATE_GROUP, createGroupOneSaga) 
    ])
}