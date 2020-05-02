import { fork } from 'redux-saga/effects';
import {studentsSaga} from './students/students.saga';

export default function* startForman() {
  yield fork(studentsSaga);
}
