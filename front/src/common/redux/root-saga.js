import { fork } from 'redux-saga/effects';
import { studentsSaga } from './students/students.saga';
import { authSaga } from './auth/auth.saga';
import { teachersSaga } from './teachers/teachers.saga';
import { passwordSaga } from './set-password/set.password.saga';
import { createGroupSaga } from './groups/groups.saga';

export default function* startForman() {
  yield fork(studentsSaga);
  yield fork(authSaga);
  yield fork(passwordSaga);
  yield fork(teachersSaga);
  yield fork(createGroupSaga);
}
