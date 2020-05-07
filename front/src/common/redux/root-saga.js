import { fork } from 'redux-saga/effects';
import { studentsSaga } from './students/students.saga';
import { authSaga } from './auth/auth.saga';
import { groupSaga } from './groups/groups.saga';

export default function* startForman() {
  yield fork(studentsSaga);
  yield fork(authSaga);
  yield fork(groupSaga);
}
