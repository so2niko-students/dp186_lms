import { fork }           from 'redux-saga/effects';
import { studentsSaga }   from './students/students.saga';
import { authSaga }       from './auth/auth.saga';
import { passwordSaga }   from './set-password/set.password.saga';
import { forgotPassSaga } from './forgot-password/forgot.password.saga';

export default function* startForman() {
  yield fork(studentsSaga);
  yield fork(authSaga);
  yield fork(passwordSaga);
  yield fork(forgotPassSaga);
}
