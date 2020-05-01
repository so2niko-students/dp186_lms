import { put, call, takeEvery, all  } from 'redux-saga/effects';
import { registerStudentApi } from '../students.api/registerStudentApi';

import {
  REGISTRATION_STUDENT_FAILED,
  STUDENT_COMPLETED_REGISTRATION,
  STUDENT_REGISTRATION_LOGICAL_ERROR_OCCURREDD,
  REGISTER_STUDENT
} from '../students.actions/types';

 function* studentRegisteredSaga(payload) {
  try {
    const response = yield call(registerStudentApi, payload);

    yield put({ type: STUDENT_COMPLETED_REGISTRATION, email: response.data.email });

  } catch (error) {
    if (error.response) {
      yield put({ type: STUDENT_REGISTRATION_LOGICAL_ERROR_OCCURREDD, error: error.response.data.error });
    } else {
      yield put({ type: REGISTRATION_STUDENT_FAILED, error: error.message });
    }
  }
}

function* watchStudentRegistaration() {
  yield takeEvery(REGISTER_STUDENT, studentRegisteredSaga);
}

export  function* rootStudentsSaga() {
  yield all([
    watchStudentRegistaration(),
  ])
}
