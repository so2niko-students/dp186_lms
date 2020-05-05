import { put, call, all, takeEvery } from "redux-saga/effects";
import { loginApi, changePasswordApi } from "./auth.api";
import * as types from "./types";

function* loginSaga(payload) {
    try {
        const response = yield call(loginApi, payload);

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        yield put({ type: types.LOGIN_USER_SUCCESS, response });
    } catch (error) {
        yield put({ type: types.LOGIN_SERVER_ERROR, error });
    }
}

function* changePasswordSaga(payload) {
    try {
        if (payload === 'is success') {
            yield put({ type: types.CHANGE_PASSWORD_STATE, });
        } else {
            const response = yield call(changePasswordApi, payload);
            yield put({ type: types.CHANGE_USER_PASSWORD_SUCCESS, response });
        }
    } catch (error) {
        yield put({ type: types.CHANGE_USER_PASSWORD_ERROR, error });
    }
}

function* watchUserklAuthentication() {
    yield takeEvery(types.LOGIN_USER, loginSaga);
    yield takeEvery(types.CHANGE_USER_PASSWORD, changePasswordSaga);
}

export function* authSaga() {
    yield all([
        watchUserklAuthentication(),
    ])
}
