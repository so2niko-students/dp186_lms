import { put, call, takeEvery, all  } from 'redux-saga/effects';
import { registerStudentApi } from './students.api';
import { showNotification } from '../../notifications/notifications';

import {
  REG_STUDENT_FAILED,
  STUDENT_COMPLETED_REG,
  STUDENT_REG_LOGICAL_ERROR_HAPPENED,
  REGISTER_STUDENT
} from './types';

 function* studentRegisteredSaga(payload) {
  try {
    const response = yield call(registerStudentApi, payload);
    showNotification('Successfully registered', `User with provided email ${response.data.email} was registered`, 'success');

    yield put({ type: STUDENT_COMPLETED_REG });
  } catch (error) {
    if (error.response) {
      showNotification('Sorry but you did not register', error.response.data.error, 'error');

      yield put({ type: STUDENT_REG_LOGICAL_ERROR_HAPPENED });
    } else {
      showNotification('Sorry but you did not register', error.message, 'error');

      yield put({ type: REG_STUDENT_FAILED });
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
