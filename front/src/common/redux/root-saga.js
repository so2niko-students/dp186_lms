import { fork } from 'redux-saga/effects';
import { studentsSaga } from './students/students.saga';
import { authSaga } from './auth/auth.saga';
import { updateSaga } from './update-profile/update.profile.saga';
import { teachersSaga } from './teachers/teachers.saga';
import { passwordSaga } from './set-password/set.password.saga';
import { forgotPassSaga } from './forgot-password/forgot.password.saga';
import { groupSaga } from './groups/groups.saga';

export default function* startForman() {
  yield fork(studentsSaga);
  yield fork(authSaga);
  yield fork(updateSaga);
  yield fork(forgotPassSaga);
  yield fork(passwordSaga);
  yield fork(teachersSaga);
  yield fork(groupSaga);
}
