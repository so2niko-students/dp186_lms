import { put, call, all, takeEvery } from "redux-saga/effects";
import { getTasks, deleteTask, changeTask } from "./task.api";
import * as types from "./types";

function* getTasksSaga(payload) {
    try {
        const response = yield call(getTasks, payload);

        yield put({ type: types.GET_ALL_TASKS_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.GET_ALL_TASKS_ERROR, error });
    }
}

function* deleteTaskSaga(payload) {
    try {
        const response = yield call(deleteTask, payload);

        yield put({ type: types.DELETE_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.DELETE_TASK_ERROR, error });
    }
}

function* changeTaskSaga(payload) {
    try {
        const response = yield call(changeTask, payload);

        yield put({ type: types.CHANGE_TASK_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.CHANGE_TASK_ERROR, error });
    }
}

function* watchTasks() {
    yield takeEvery(types.GET_ALL_TASKS, getTasksSaga);
    yield takeEvery(types.DELETE_TASK, deleteTaskSaga);
    yield takeEvery(types.CHANGE_TASK, changeTaskSaga);
}

export function* tasksSaga() {
    yield all([
        watchTasks(),
    ])
}