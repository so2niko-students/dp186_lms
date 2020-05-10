import { put, call, all, takeEvery } from "redux-saga/effects";
import { loginApi, changePasswordApi } from "./auth.api";
import * as types from "./types";

function* loginSaga(payload) {
    try {
        const response = yield call(loginApi, payload);

        localStorage.setItem('token', response.data.token);
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
            let response;
            const { oldPassword, newPassword, userType } = payload.user;

            if (userType === 'admin') {
                const teacherId = +Object.keys(payload.user.teacherId)[0];
                const url = `${process.env.REACT_APP_CHANGE_TEACHER_PASSWORD_BY_ADMIN}${teacherId}`;
                response = yield call(changePasswordApi, { newPassword }, url);
            }

            if (userType === 'teacher') {
                const url = process.env.REACT_APP_CHANGE_TEACHER_PASSWORD;
                response = yield call(changePasswordApi, { oldPassword, newPassword }, url);
            }

            if (userType === 'student') {
                const url = process.env.REACT_APP_CHANGE_STUDENT_PASSWORD;
                response = yield call(changePasswordApi, { oldPassword, newPassword }, url);
            }

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
