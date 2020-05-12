import { put, call, all, takeEvery } from "redux-saga/effects";
import { getTasks, deleteTask, changeTask } from "./task.api";
import * as types from "./types";

function* getTasksSaga({ data }) {
    try {
        const response = yield call(getTasks, data);

        yield put({ type: types.GET_ALL_TASKS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.GET_ALL_TASKS_ERROR, payload: error });
    }
}

function* deleteTaskSaga({ id }) {
    try {
        const response = yield call(deleteTask, id);

        yield put({ type: types.DELETE_TASK_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.DELETE_TASK_ERROR, payload: error });
    }
}

function* changeTaskSaga({ data }) {
    try {
        const response = yield call(changeTask, data);

        yield put({ type: types.CHANGE_TASK_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.CHANGE_TASK_ERROR, payload: error });
    }
}

export function* tasksSaga() {
    yield all([
        yield takeEvery(types.GET_ALL_TASKS, getTasksSaga),
        yield takeEvery(types.DELETE_TASK, deleteTaskSaga),
        yield takeEvery(types.CHANGE_TASK, changeTaskSaga),
    ])
}