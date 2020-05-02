import { put, call, takeEvery, all  } from 'redux-saga/effects';
import { registerStudentApi } from './students.api';

import {
  REG_STUDENT_FAILED,
  STUDENT_COMPLETED_REG,
  STUDENT_REG_LOGICAL_ERROR_HAPPENED,
  REGISTER_STUDENT
} from './types';

 function* studentRegisteredSaga(payload) {
  try {
    const response = yield call(registerStudentApi, payload);

    yield put({ type: STUDENT_COMPLETED_REG, email: response.data.email });

  } catch (error) {
    if (error.response) {
      yield put({ type: STUDENT_REG_LOGICAL_ERROR_HAPPENED, error: error.response.data.error });
    } else {
      yield put({ type: REG_STUDENT_FAILED, error: error.message });
    }
  }
}

function* watchStudentRegistaration() {
  yield takeEvery(REGISTER_STUDENT, studentRegisteredSaga);
}

export  function* studentsSaga() {
  yield all([
    watchStudentRegistaration(),
  ])
}
